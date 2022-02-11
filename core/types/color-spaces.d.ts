import { ColorSpaceConfigs } from "./color-spaces.config";

export type HexColor = string;
export type ColorProperties = Record<string, any>;
export type ColorSpace = Partial<
  Record<keyof ColorSpaceConfigs, ColorProperties>
>;

export interface RGBColor {
  red: number;
  green: number;
  blue: number;
}

export interface HSLColor {
  hue: number;
  saturation: number;
  lightness: number;
}

// Extending Color space
// export interface BRGBColor {
//   value: number;
// }

// {
//   "rgb": {
//   "red": 198,
//   "green": 151,
//   "blue": 74
//   }
//   },
