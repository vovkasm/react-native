/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * <p>
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.react.uimanager.events;

import com.facebook.infer.annotation.Assertions;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;

import javax.annotation.Nullable;

import static com.facebook.react.uimanager.events.TouchesHelper.TARGET_KEY;

public class ReactEventEmitter implements RCTEventEmitter {

  private static final String TAG = ReactEventEmitter.class.getSimpleName();
  private final ReactApplicationContext mReactContext;

  public ReactEventEmitter(ReactApplicationContext reactContext) {
    mReactContext = reactContext;
  }

  @Override
  public void receiveEvent(int targetReactTag, String eventName, @Nullable WritableMap event) {
    getEventEmitter(targetReactTag).receiveEvent(targetReactTag, eventName, event);
  }

  @Override
  public void receiveTouches(
    String eventName,
    WritableArray touches,
    WritableArray changedIndices) {

    Assertions.assertCondition(touches.size() > 0);

    int reactTag = touches.getMap(0).getInt(TARGET_KEY);
    getEventEmitter(reactTag).receiveTouches(eventName, touches, changedIndices);
  }

  private RCTEventEmitter getEventEmitter(int reactTag) {
    return mReactContext.getJSModule(RCTEventEmitter.class);
  }
}
