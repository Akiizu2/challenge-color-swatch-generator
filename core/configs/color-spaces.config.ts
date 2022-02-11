import type { ColorSpaceConfigs } from "../types/color-spaces.config";
import {
  hexToHSL,
  hexToRGB,
  hslToCssProperty,
  hslToHex,
  rgbToCssProperty,
  rgbToHex,
} from "../utils/color";

const configs: ColorSpaceConfigs = {
  rgb: {
    toHex: rgbToHex,
    fromHex: hexToRGB,
    toCssProperty: rgbToCssProperty,
  },
  hsl: {
    toHex: hslToHex,
    fromHex: hexToHSL,
    toCssProperty: hslToCssProperty,
  },
  // Extending custom color space
  // brgb: {
  //   toHex: ({ value }: { value: number }) => "#000", // TODO: add toHex util for this color space
  //   fromHex: () => ({ value: 10000 }), // TODO: add fromHex util for this color space
  //   toCssProperty: () => "brgb(10000)", // TODO: add toCssProperties util for this color space
  // },
};

export default configs;
