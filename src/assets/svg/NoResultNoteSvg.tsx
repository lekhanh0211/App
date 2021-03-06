import * as React from "react";
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";

export function NoResultNoteSvg({ size = 100 }) {
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
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M45.882 40.446c4.364-5.502 12.498-8.994 19.59-10.302a1.256 1.256 0 011.487 1.234v35.278c-6.224 1.368-14.195 4.35-21.077 10.812V40.446zm8.023 20.3c1.018-.622 3.623-2.106 5.855-2.484a1.882 1.882 0 10-.627-3.712c-2.775.468-5.696 2.07-7.19 2.983a1.883 1.883 0 001.961 3.213zm-.01-12.058c1.226-.853 3.497-1.993 5.865-2.393a1.882 1.882 0 10-.627-3.712c-2.98.503-5.771 1.889-7.39 3.017a1.881 1.881 0 102.152 3.088zM21.042 31.378v35.278c6.223 1.368 14.194 4.35 21.076 10.812V40.446c-4.367-5.49-12.463-8.989-19.589-10.302a1.256 1.256 0 00-1.487 1.234zm15.64 28.742a1.883 1.883 0 01-2.587.625c-1.017-.62-3.623-2.105-5.855-2.483a1.882 1.882 0 11.627-3.712c2.775.468 5.696 2.07 7.19 2.983.887.542 1.167 1.7.626 2.587zm.043-11.9a1.883 1.883 0 01-2.62.468c-1.226-.853-3.497-1.992-5.865-2.393a1.882 1.882 0 11.627-3.712c2.98.503 5.772 1.889 7.39 3.017a1.88 1.88 0 01.468 2.62z"
          />
          <Path d="M70.723 68.193V40.17c1.544-.038 2.912-.048 4.025-.046A1.254 1.254 0 0176 41.379V73.89c0 .666-.52 1.217-1.186 1.253l-1.016.054c-6.524.347-14.782.787-22.592 2.679C57.35 73.14 64.077 71 69.187 70.043a1.883 1.883 0 001.536-1.85zM17.277 40.398v27.795c0 .905.645 1.683 1.536 1.85 5.11.958 11.836 3.098 17.981 7.834-7.814-1.893-16.083-2.333-22.576-2.678l-1.031-.055A1.254 1.254 0 0112 73.89V41.515c0-.708.585-1.275 1.293-1.254 1.273.04 2.609.083 3.984.137z" />
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
