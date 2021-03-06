import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function SearchSvg({ size = 20 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 20 20" fill="none">
      <Path
        d="M19.361 18.217l-4.76-4.95a8.049 8.049 0 001.894-5.192C16.495 3.623 12.873 0 8.42 0 3.968 0 .345 3.623.345 8.075c0 4.453 3.623 8.075 8.075 8.075a7.989 7.989 0 004.627-1.461l4.796 4.988c.2.208.47.323.759.323a1.054 1.054 0 00.759-1.783zM8.421 2.107a5.975 5.975 0 015.968 5.968 5.975 5.975 0 01-5.969 5.969 5.975 5.975 0 01-5.968-5.969A5.975 5.975 0 018.42 2.107z"
        fill="#231F20"
      />
    </Svg>
  );
}
