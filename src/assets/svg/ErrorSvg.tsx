import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent({ size = 24, color = "#EF4F2A" }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="m12.866 3 9.526 16.5a1 1 0 0 1-.866 1.5H2.474a1 1 0 0 1-.866-1.5L11.134 3a1 1 0 0 1 1.732 0Zm-8.66 16h15.588L12 5.5 4.206 19ZM11 16h2v2h-2v-2Zm0-7h2v5h-2V9Z"
        fill="#EF4F2A"
      />
    </Svg>
  );
}

const ErrorSvg = React.memo(SvgComponent);
export { ErrorSvg };
