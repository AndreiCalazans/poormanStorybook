// @flow

import React from 'react';
import { Avatar as RNEAvatar } from 'react-native-elements';

const AVATAR_SIZES = {
  xsmall: 20,
  small: 32,
  medium: 48,
  large: 72,
  xlarge: 148,
};

type Props = {
  xsmall?: boolean,
  small?: boolean,
  medium?: boolean,
  large?: boolean,
  xlarge?: boolean,
  avatarUrl: ?string,
};

const Avatar = (props: Props) => {
  const { avatarUrl } = props;
  const size = calculateSize(props);
  return <RNEAvatar {...props} rounded size={size} source={avatarUrl && { uri: avatarUrl }} />;
};

const calculateSize = ({ xsmall, small, medium, large, xlarge }) => {
  if (xsmall) return AVATAR_SIZES.xsmall;
  if (small) return AVATAR_SIZES.small;
  if (medium) return AVATAR_SIZES.medium;
  if (large) return AVATAR_SIZES.large;
  if (xlarge) return AVATAR_SIZES.xlarge;
  return AVATAR_SIZES.small;
};

export default Avatar;
