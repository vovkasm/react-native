/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 * <p>
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

package com.facebook.react.uimanager.common;

public class ViewUtil {
  /**
   * @param reactTag {@link int} react tag
   * @return if the react tag received by parameter is a RootTag or not.
   */
  @Deprecated
  public static boolean isRootTag(int reactTag) {
    return reactTag % 10 == 1;
  }

}
