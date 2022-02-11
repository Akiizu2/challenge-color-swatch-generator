import { Button, CircularProgress } from "@mui/material";

import React from "react";
import { ColorSwatch } from "../../components/color-swatch";

import { useColorGenerator } from "../../hooks";
import type { ColorSpace } from "../../types/color-spaces";
import { ColorGeneratorWrapper } from "./colorGenerator.styles";

type ColorGeneratorProps = {
  colors?: ColorSpace[];
};

const ColorGenerator: React.FC<ColorGeneratorProps> = ({ colors }) => {
  const { generate, colors: generatedColor, loading } = useColorGenerator();

  const colorSwatch = (generatedColor || colors) as ColorSpace[];

  return (
    <ColorGeneratorWrapper>
      <ColorSwatch colors={colorSwatch} />
      <Button variant="contained" onClick={generate}>
        Generate
      </Button>
    </ColorGeneratorWrapper>
  );
};

ColorGenerator.defaultProps = {};

export default ColorGenerator;
