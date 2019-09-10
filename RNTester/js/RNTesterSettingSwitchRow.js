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

const React = require('react');
const {StyleSheet, Switch, Text, View} = require('react-native');

class RNTesterSettingSwitchRow extends React.Component<
  {label: string},
  {value: boolean},
> {
  render() {
    const {label} = this.props;
    return (
      <View style={styles.row}>
        <Text>{label}</Text>
        <Switch
          value={this.state.value}
          onValueChange={value => {
            this.setState(() => {
              value;
            });
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  row: {
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

module.exports = RNTesterSettingSwitchRow;
