import type { RGBColor } from "./color-spaces";

export interface ColorSpaceMethods<T = any> {
  toHex: (params: T) => string;
  fromHex: (hex: string) => T;
  toCssProperty: (params: T) => string;
}

export interface ColorSpaceConfigs {
  rgb: ColorSpaceMethods<RGBColor>;
  hsl: ColorSpaceMethods<HSLColor>;

  // Extending custom color space
  // brgb: ColorSpaceMethods<any>;
}
