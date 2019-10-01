/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow strict-local
 */

'use strict';

const Clipboard = require('../../BatchedBridge/NativeModules').Clipboard;

/**
 * `Clipboard` gives you an interface for setting and getting content from Clipboard on both iOS and Android
 */
module.exports = {
  /**
   * Get content of string type, this method returns a `Promise`
   */
  getString(): Promise<string> {
    return Clipboard.getString();
  },
  /**
   * Set content of string type.
   * @param content the content to be stored in the clipboard.
   */
  setString(content: string) {
    Clipboard.setString(content);
  },
};
