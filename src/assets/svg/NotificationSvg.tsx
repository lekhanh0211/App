import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function NotificationSvg({ size = 23, selected = false }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 23 23" fill="none">
      <Path
        d="M18.81 13.78l1.613 1.611c.27.27.42.636.42 1.017v1.56H2.157v-1.56c0-.381.152-.747.421-1.017L4.19 13.78c.54-.54.842-1.27.842-2.033v-3.84A6.466 6.466 0 0110.08 1.6a2.222 2.222 0 00-.006-.045c-.005-.039-.01-.078-.01-.119A1.44 1.44 0 0111.5 0a1.44 1.44 0 011.438 1.438c0 .04-.006.08-.011.12-.002.015-.005.03-.006.046 2.933.676 5.048 3.419 5.048 6.524v3.619c0 .762.303 1.493.842 2.033zM11.5 23a2.875 2.875 0 01-2.875-2.875v-.719h5.75v.719A2.875 2.875 0 0111.5 23z"
        fill={selected ? "#489620" : "#9E9E9E"}
      />
    </Svg>
  );
}
