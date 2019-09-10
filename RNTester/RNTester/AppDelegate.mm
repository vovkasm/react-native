/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

#import "AppDelegate.h"

#import <React/JSCExecutorFactory.h>
#import <React/RCTBridge.h>
#import <React/RCTBundleURLProvider.h>
#import <React/RCTCxxBridgeDelegate.h>
#import <React/RCTJavaScriptLoader.h>
#import <React/RCTLinkingManager.h>
#import <React/RCTRootView.h>

#import <cxxreact/JSExecutor.h>

#ifdef RN_TURBO_MODULE_ENABLED
#import <jsireact/RCTTurboModuleManager.h>

#import "RNTesterTurboModuleProvider.h"
#endif

#ifdef RN_TURBO_MODULE_ENABLED
@interface AppDelegate() <RCTCxxBridgeDelegate, RCTTurboModuleManagerDelegate>{
#else
@interface AppDelegate() <RCTCxxBridgeDelegate>{
#endif

#ifdef RN_TURBO_MODULE_ENABLED
  RCTTurboModuleManager *_turboModuleManager;
#endif

}
@end

@implementation AppDelegate

- (BOOL)application:(__unused UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
#ifdef RN_TURBO_MODULE_ENABLED
  RCTEnableTurboModule(YES);
#endif

  _bridge = [[RCTBridge alloc] initWithDelegate:self
                                  launchOptions:launchOptions];

  // Appetizer.io params check
  NSDictionary *initProps = @{};
  NSString *_routeUri = [[NSUserDefaults standardUserDefaults] stringForKey:@"route"];
  if (_routeUri) {
    initProps = @{@"exampleFromAppetizeParams": [NSString stringWithFormat:@"rntester://example/%@Example", _routeUri]};
  }

  UIView *rootView = [[RCTRootView alloc] initWithBridge:_bridge moduleName:@"RNTesterApp" initialProperties:initProps];

  self.window = [[UIWindow alloc] initWithFrame:[UIScreen mainScreen].bounds];
  UIViewController *rootViewController = [UIViewController new];
  rootViewController.view = rootView;
  self.window.rootViewController = rootViewController;
  [self.window makeKeyAndVisible];
  return YES;
}

- (NSURL *)sourceURLForBridge:(__unused RCTBridge *)bridge
{
  NSString *bundlePrefix = [[[NSBundle mainBundle] infoDictionary] valueForKey:@"RN_BUNDLE_PREFIX"];
  NSString *bundleRoot = [NSString stringWithFormat:@"%@RNTester/js/RNTesterApp.ios", bundlePrefix];
  return [[RCTBundleURLProvider sharedSettings] jsBundleURLForBundleRoot:bundleRoot
                                                        fallbackResource:nil];
}

- (BOOL)application:(UIApplication *)app
            openURL:(NSURL *)url
            options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options
{
  return [RCTLinkingManager application:app openURL:url options:options];
}

- (void)loadSourceForBridge:(RCTBridge *)bridge
                 onProgress:(RCTSourceLoadProgressBlock)onProgress
                 onComplete:(RCTSourceLoadBlock)loadCallback
{
  [RCTJavaScriptLoader loadBundleAtURL:[self sourceURLForBridge:bridge]
                            onProgress:onProgress
                            onComplete:loadCallback];
}

# pragma mark - RCTCxxBridgeDelegate

- (std::unique_ptr<facebook::react::JSExecutorFactory>)jsExecutorFactoryForBridge:(RCTBridge *)bridge
{
  __weak __typeof(self) weakSelf = self;
  return std::make_unique<facebook::react::JSCExecutorFactory>([weakSelf, bridge](facebook::jsi::Runtime &runtime) {
    if (!bridge) {
      return;
    }
    __typeof(self) strongSelf = weakSelf;
    if (strongSelf) {
#ifdef RN_TURBO_MODULE_ENABLED
      strongSelf->_turboModuleManager = [[RCTTurboModuleManager alloc] initWithBridge:bridge delegate:strongSelf];
      [strongSelf->_turboModuleManager installJSBindingWithRuntime:&runtime];
#endif
    }
  });
}

#pragma mark RCTTurboModuleManagerDelegate

#ifdef RN_TURBO_MODULE_ENABLED

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name
                                                      jsInvoker:(std::shared_ptr<facebook::react::JSCallInvoker>)jsInvoker
{
  return RNTesterTurboModuleProvider(name, jsInvoker);
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:(const std::string &)name
                                                       instance:(id<RCTTurboModule>)instance
                                                      jsInvoker:(std::shared_ptr<facebook::react::JSCallInvoker>)jsInvoker
{
  return RNTesterTurboModuleProvider(name, instance, jsInvoker);
}

- (id<RCTTurboModule>)getModuleInstanceFromClass:(Class)moduleClass
{
  // No custom initializer here.
  return [moduleClass new];
}

#endif

@end
