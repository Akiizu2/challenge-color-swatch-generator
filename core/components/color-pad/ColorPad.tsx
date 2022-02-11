import { Typography } from "@mui/material";
import React from "react";
import configs from "../../configs/color-spaces.config";
import { transformHexToColorCSSProperties } from "../../services/color.service";
import { ColorProperties } from "../../types/color-spaces";
import { ColorSpaceConfigs } from "../../types/color-spaces.config";
import { ColorPadCssPropertyWrapper, ColorPadWrapper } from "./colorPad.styles";

type ColorPadProps = {
  color: ColorProperties;
};

const ColorPad: React.FC<ColorPadProps> = ({ color }) => {
  const [[key, properties]] = Object.entries(color);
  const hexColor = configs[key as keyof ColorSpaceConfigs].toHex(properties);
  const colorSpaces = transformHexToColorCSSProperties(configs, hexColor);

  return (
    <ColorPadWrapper color={hexColor}>
      <ColorPadCssPropertyWrapper>
        {colorSpaces.map(({ type, value }) => (
          <Typography variant="body1" key={type}>
            {value}
          </Typography>
        ))}
      </ColorPadCssPropertyWrapper>
    </ColorPadWrapper>
  );
};

ColorPad.defaultProps = {};

export default ColorPad;
