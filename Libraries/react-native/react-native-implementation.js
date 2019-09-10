/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */

'use strict';

const invariant = require('invariant');
const warnOnce = require('../Utilities/warnOnce');

// Export React, plus some native additions.
module.exports = {
  // Components
  get AccessibilityInfo() {
    return require('../Components/AccessibilityInfo/AccessibilityInfo');
  },
  get ActivityIndicator() {
    return require('../Components/ActivityIndicator/ActivityIndicator');
  },
  get ART() {
    return require('../ART/ReactNativeART');
  },
  get Button() {
    return require('../Components/Button');
  },
  get DatePickerIOS() {
    return require('../Components/DatePicker/DatePickerIOS');
  },
  get DrawerLayoutAndroid() {
    return require('../Components/DrawerAndroid/DrawerLayoutAndroid');
  },
  get FlatList() {
    return require('../Lists/FlatList');
  },
  get Image() {
    return require('../Image/Image');
  },
  get ImageBackground() {
    return require('../Image/ImageBackground');
  },
  get ImageEditor() {
    warnOnce(
      'image-editor-moved',
      'Image Editor has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/image-editor' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-image-editor',
    );
    return require('../Image/ImageEditor');
  },
  get ImageStore() {
    warnOnce(
      'imagestore-deprecation',
      'ImageStore is deprecated and will be removed in a future release. ' +
        'To get a base64-encoded string from a local image use either of the following third-party libraries:' +
        "* expo-file-system: `readAsStringAsync(filepath, 'base64')`" +
        "* react-native-fs: `readFile(filepath, 'base64')`",
    );
    return require('../Image/ImageStore');
  },
  get InputAccessoryView() {
    return require('../Components/TextInput/InputAccessoryView');
  },
  get KeyboardAvoidingView() {
    return require('../Components/Keyboard/KeyboardAvoidingView');
  },
  get MaskedViewIOS() {
    warnOnce(
      'maskedviewios-moved',
      'MaskedViewIOS has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/masked-view' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-masked-view',
    );
    return require('../Components/MaskedView/MaskedViewIOS');
  },
  get Modal() {
    return require('../Modal/Modal');
  },
  get Picker() {
    return require('../Components/Picker/Picker');
  },
  get PickerIOS() {
    return require('../Components/Picker/PickerIOS');
  },
  get ProgressBarAndroid() {
    return require('../Components/ProgressBarAndroid/ProgressBarAndroid');
  },
  get ProgressViewIOS() {
    return require('../Components/ProgressViewIOS/ProgressViewIOS');
  },
  get SafeAreaView() {
    return require('../Components/SafeAreaView/SafeAreaView');
  },
  get ScrollView() {
    return require('../Components/ScrollView/ScrollView');
  },
  get SectionList() {
    return require('../Lists/SectionList');
  },
  get SegmentedControlIOS() {
    return require('../Components/SegmentedControlIOS/SegmentedControlIOS');
  },
  get Slider() {
    warnOnce(
      'slider-moved',
      'Slider has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/slider' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-slider',
    );
    return require('../Components/Slider/Slider');
  },
  get Switch() {
    return require('../Components/Switch/Switch');
  },
  get RefreshControl() {
    return require('../Components/RefreshControl/RefreshControl');
  },
  get StatusBar() {
    return require('../Components/StatusBar/StatusBar');
  },
  get Text() {
    return require('../Text/Text');
  },
  get TextInput() {
    return require('../Components/TextInput/TextInput');
  },
  get ToolbarAndroid() {
    return require('../Components/ToolbarAndroid/ToolbarAndroid');
  },
  get Touchable() {
    return require('../Components/Touchable/Touchable');
  },
  get TouchableHighlight() {
    return require('../Components/Touchable/TouchableHighlight');
  },
  get TouchableNativeFeedback() {
    return require('../Components/Touchable/TouchableNativeFeedback');
  },
  get TouchableOpacity() {
    return require('../Components/Touchable/TouchableOpacity');
  },
  get TouchableWithoutFeedback() {
    return require('../Components/Touchable/TouchableWithoutFeedback');
  },
  get View() {
    return require('../Components/View/View');
  },
  get ViewPagerAndroid() {
    warnOnce(
      'viewpager-moved',
      'ViewPagerAndroid has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/viewpager' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-viewpager',
    );
    return require('../Components/ViewPager/ViewPagerAndroid');
  },
  get VirtualizedList() {
    return require('../Lists/VirtualizedList');
  },
  get VirtualizedSectionList() {
    return require('../Lists/VirtualizedSectionList');
  },

  // APIs
  get ActionSheetIOS() {
    return require('../ActionSheetIOS/ActionSheetIOS');
  },
  get Alert() {
    return require('../Alert/Alert');
  },
  get Animated() {
    return require('../Animated/src/Animated');
  },
  get AppRegistry() {
    return require('../ReactNative/AppRegistry');
  },
  get AppState() {
    return require('../AppState/AppState');
  },
  get BackHandler() {
    return require('../Utilities/BackHandler');
  },
  get Clipboard() {
    return require('../Components/Clipboard/Clipboard');
  },
  get DatePickerAndroid() {
    return require('../Components/DatePickerAndroid/DatePickerAndroid');
  },
  get DeviceInfo() {
    return require('../Utilities/DeviceInfo');
  },
  get Dimensions() {
    return require('../Utilities/Dimensions');
  },
  get Easing() {
    return require('../Animated/src/Easing');
  },
  get findNodeHandle() {
    return require('../Renderer/shims/ReactNative').findNodeHandle;
  },
  get I18nManager() {
    return require('../ReactNative/I18nManager');
  },
  get ImagePickerIOS() {
    return require('../Image/ImagePickerIOS');
  },
  get InteractionManager() {
    return require('../Interaction/InteractionManager');
  },
  get Keyboard() {
    return require('../Components/Keyboard/Keyboard');
  },
  get LayoutAnimation() {
    return require('../LayoutAnimation/LayoutAnimation');
  },
  get Linking() {
    return require('../Linking/Linking');
  },
  get NativeEventEmitter() {
    return require('../EventEmitter/NativeEventEmitter');
  },
  get PanResponder() {
    return require('../Interaction/PanResponder');
  },
  get PermissionsAndroid() {
    return require('../PermissionsAndroid/PermissionsAndroid');
  },
  get PixelRatio() {
    return require('../Utilities/PixelRatio');
  },
  get PushNotificationIOS() {
    warnOnce(
      'pushNotificationIOS-moved',
      'PushNotificationIOS has been extracted from react-native core and will be removed in a future release. ' +
        "It can now be installed and imported from '@react-native-community/push-notification-ios' instead of 'react-native'. " +
        'See https://github.com/react-native-community/react-native-push-notification-ios',
    );
    return require('../PushNotificationIOS/PushNotificationIOS');
  },
  get Settings() {
    return require('../Settings/Settings');
  },
  get Share() {
    return require('../Share/Share');
  },
  get StatusBarIOS() {
    return require('../Components/StatusBar/StatusBarIOS');
  },
  get StyleSheet() {
    return require('../StyleSheet/StyleSheet');
  },
  get Systrace() {
    return require('../Performance/Systrace');
  },
  get TimePickerAndroid() {
    return require('../Components/TimePickerAndroid/TimePickerAndroid');
  },
  get ToastAndroid() {
    return require('../Components/ToastAndroid/ToastAndroid');
  },
  get TurboModuleRegistry() {
    return require('../TurboModule/TurboModuleRegistry');
  },
  get TVEventHandler() {
    return require('../Components/AppleTV/TVEventHandler');
  },
  get UIManager() {
    return require('../ReactNative/UIManager');
  },
  get unstable_batchedUpdates() {
    return require('../Renderer/shims/ReactNative').unstable_batchedUpdates;
  },
  get UTFSequence() {
    return require('../UTFSequence');
  },
  get Vibration() {
    return require('../Vibration/Vibration');
  },
  get YellowBox() {
    return require('../YellowBox/YellowBox');
  },

  // Plugins
  get DeviceEventEmitter() {
    return require('../EventEmitter/RCTDeviceEventEmitter');
  },
  get NativeAppEventEmitter() {
    return require('../EventEmitter/RCTNativeAppEventEmitter');
  },
  get NativeModules() {
    return require('../BatchedBridge/NativeModules');
  },
  get Platform() {
    return require('../Utilities/Platform');
  },
  get processColor() {
    return require('../StyleSheet/processColor');
  },
  get requireNativeComponent() {
    return require('../ReactNative/requireNativeComponent');
  },

  // Prop Types
  get ColorPropType() {
    return require('../DeprecatedPropTypes/DeprecatedColorPropType');
  },
  get EdgeInsetsPropType() {
    return require('../DeprecatedPropTypes/DeprecatedEdgeInsetsPropType');
  },
  get PointPropType() {
    return require('../DeprecatedPropTypes/DeprecatedPointPropType');
  },
  get ViewPropTypes() {
    return require('../DeprecatedPropTypes/DeprecatedViewPropTypes');
  },
};
