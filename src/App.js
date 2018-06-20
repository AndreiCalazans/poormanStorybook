/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import * as React from 'react';
import { YellowBox } from 'react-native';
import Navigator from './navigation';

YellowBox.ignoreWarnings([
  'Class RCTCxxModule',
  'Warning: componentWillMount is deprecated',
  'Warning: isMounted(...) is deprecated',
  'Warning: componentWillReceiveProps is deprecated',
  'Module RCTImageLoader requires',
  'Warning: isMounted(...) is deprecated',
  'Module RCTImageLoader',
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes',
]);

export default () => <Navigator />

