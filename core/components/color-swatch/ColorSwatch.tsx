import React from "react";

import type { ColorSpace } from "../../types/color-spaces";

import { ColorPad } from "../color-pad";
import { ColorSwatchWrapper } from "./colorSwatch.styles";

type ColorSwatchProps = {
  colors: ColorSpace[];
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({ colors }) => {
  return (
    <ColorSwatchWrapper>
      {colors.map((color, index) => (
        <ColorPad key={index} color={color} />
      ))}
    </ColorSwatchWrapper>
  );
};

ColorSwatch.defaultProps = {};

export default ColorSwatch;
