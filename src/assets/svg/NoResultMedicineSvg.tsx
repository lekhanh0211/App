import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export function NoResultMedicineSvg({ size = 100 }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <G clipPath="url(#prefix__clip0)">
        <G clipPath="url(#prefix__clip1)">
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M90.278 29.452a111.146 111.146 0 01-6.864 22.601C76.128 68.448 66.156 81.868 49.802 84.53c-15.299 2.492-39.533-.888-42.66-1.291A132.696 132.696 0 0126.28 62.115c5.374-4.26 18.947-7.192 30.11-9.958 11.163-2.765 24.42-10.351 30.06-16.884a26.107 26.107 0 003.704-5.76l.125-.061zM8.128 77.444c2.707-12.431 9.92-41.727 19.375-50.975a45.368 45.368 0 0130.533-12.384c4.243-.375 30.126-.004 34.119.054a30.79 30.79 0 00-2.268 5.432c-6.691 21.877-24.892 25.541-53.51 33.802-13.432 3.881-22.478 14.232-28.248 24.071z"
            fill="#fff"
          />
        </G>
        <Path
          d="M52.412 0h3.156v6.313h-3.156V0zM47.677 10.259h-6.313v3.156h6.313V10.26zM65.827 10.259h-6.313v3.156h6.313V10.26z"
          fill="#A4AFC1"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M85.382 38.936a4.74 4.74 0 004.735 4.735 4.74 4.74 0 004.735-4.735 4.74 4.74 0 00-4.735-4.735 4.74 4.74 0 00-4.735 4.735zm3.156 0a1.579 1.579 0 113.156.001 1.579 1.579 0 01-3.156 0z"
          fill="#A4AFC1"
        />
        <G clipPath="url(#prefix__clip2)" fill="#9E9E9E">
          <Path d="M51.013 82.292l7.183-7.183-13.14-13.14c-1.466 7.344-7.844 12.938-15.551 13.199a12.615 12.615 0 003.574 7.124c4.945 4.944 12.99 4.944 17.934 0zM60.848 72.457l7.183-7.182c4.944-4.945 4.944-12.99 0-17.935-4.945-4.944-12.99-4.944-17.934 0l-4.724 4.725v4.918l15.475 15.474zM16.26 34.681C16.26 27.69 21.95 22 28.943 22s12.681 5.689 12.681 12.681V44.84H16.261V34.68z" />
          <Path d="M16.26 58.748c0 6.992 5.69 12.68 12.682 12.68s12.681-5.688 12.681-12.68V48.589H16.261v10.159z" />
        </G>
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h100v100H0z" />
        </ClipPath>
        <ClipPath id="prefix__clip1">
          <Path fill="#fff" transform="rotate(-15 50 50)" d="M0 0h100v100H0z" />
        </ClipPath>
        <ClipPath id="prefix__clip2">
          <Path fill="#fff" transform="translate(12 22)" d="M0 0h64v64H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}
