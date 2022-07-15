import { colors } from "@/styles/theme"
import * as React from "react"
import Svg, { Circle, G, Path } from "react-native-svg"

export function WebsiteSvg({ size = 20, color = colors.primary }) {
    return (
        <Svg height={size} viewBox="0 0 426.708 426.708" width={size}>
            <Circle cx={213.429} cy={213.322} fill={'#fff'} r={203.381} />
            <G fill={color}>
                <Path d="M213.356 426.543a211.628 211.628 0 01-150.694-62.366l-2.914-3.221c-79.665-82.197-79.665-212.8 0-294.997v-.057l2.914-3.164c82.828-83.224 217.44-83.546 300.664-.718l.718.718 2.914 3.221c79.665 82.197 79.665 212.8 0 294.997v.057l-2.914 3.164a211.619 211.619 0 01-150.688 62.366zM79.538 353.02c75 71.799 193.297 71.615 268.074-.416l2.467-2.69c75.366-74.778 75.842-196.493 1.064-271.859-.353-.356-.708-.711-1.064-1.064l-2.914-3.122c-74.858-72.16-193.446-71.976-268.079.415l-2.467 2.69C1.253 151.752.777 273.468 75.555 348.833c.353.356.708.711 1.064 1.064z" />
                <Path d="M213.356 139.356a211.625 211.625 0 01-150.694-62.34l-2.914-2.898v-8.217l2.914-3.164c82.828-83.224 217.44-83.546 300.664-.718l.718.718 2.914 2.898v8.466L364.045 77a211.62 211.62 0 01-150.689 62.356zM83.847 69.866c73.622 66.272 185.397 66.272 259.019 0-73.484-66.632-185.535-66.632-259.019 0zM213.356 426.543a211.628 211.628 0 01-150.694-62.366l-2.914-2.898v-8.17l2.883-3.164c82.81-83.242 217.422-83.591 300.664-.781l.781.781 2.883 2.898v8.44l-2.914 2.898a211.623 211.623 0 01-150.689 62.362zM83.821 357.016c73.631 66.307 185.445 66.307 259.076 0-73.521-66.591-185.554-66.591-259.076 0z" />
                <Path d="M213.356 426.6c-62.543 0-111.562-93.667-111.562-213.216S150.813.178 213.356.178s111.562 93.667 111.562 213.201S275.9 426.6 213.356 426.6zm0-406.632c-49.763 0-91.778 88.567-91.778 193.416s42.015 193.427 91.778 193.427 91.778-88.577 91.778-193.427-42.015-193.416-91.778-193.416z" />
                <Path d="M10.048 203.429h406.768v19.79H10.048z" />
                <Path d="M203.522 9.94h19.79v406.768h-19.79z" />
            </G>
        </Svg>
    )
}


