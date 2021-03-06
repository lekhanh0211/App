import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export function DescriptionSvg({ size = 25 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 25 25" fill="none">
      <G clipPath="url(#prefix__clip0)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.068 3.845V17.26a.898.898 0 01-.896.894c-2.082.005-5.57.439-7.977 2.957V7.073c0-.167.042-.324.123-.453 1.975-3.182 5.77-3.665 7.858-3.67h.002a.89.89 0 01.89.895zM3.822 2.95h.002c2.087.005 5.883.489 7.859 3.67.08.13.123.286.123.453V21.11c-2.407-2.518-5.896-2.952-7.978-2.957a.898.898 0 01-.896-.895V3.845a.89.89 0 01.89-.895zm20.284 3.094h-.65v11.215a2.289 2.289 0 01-2.28 2.284c-1.767.004-4.679.35-6.741 2.302 3.567-.874 7.327-.306 9.47.182A.893.893 0 0025 21.156V6.938a.895.895 0 00-.894-.894zm-22.563 0v11.215a2.289 2.289 0 002.281 2.284c1.767.004 4.679.35 6.741 2.301-3.567-.873-7.327-.306-9.47.183A.892.892 0 010 21.155V6.938c0-.493.401-.894.894-.894h.65z"
          fill="#489620"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path d="M0 0h25v25H0V0z" fill="#fff" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
