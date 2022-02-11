/**
 * Converting Color Spaces Utilities
 * Reference from: https://css-tricks.com/converting-color-spaces-in-javascript/
 */

import type { HexColor, HSLColor, RGBColor } from "../types/color-spaces";
import { randomDecimal } from "./math";

export function getRandomHexColors(size: number = 1): HexColor[] {
  const posibleDecimal = 255 * 255 * 255;

  let hexes = [];
  for (let i = 0; i < size; i++) {
    hexes.push(randomDecimal(0, posibleDecimal));
  }

  const hexColors = hexes.map((hex) => `#${hex.toString(16)}`);

  return hexColors;
}

/**
 * RGB Color Space
 */

export function hexToRGB(hex: string): RGBColor {
  let red = 0;
  let green = 0;
  let blue = 0;

  if (hex.length == 4) {
    red = +`0x${hex[1]}${hex[1]}`;
    green = +`0x${hex[2]}${hex[2]}`;
    blue = +`0x${hex[3]}${hex[3]}`;
  } else if (hex.length == 7) {
    red = +`0x${hex[1]}${hex[2]}`;
    green = +`0x${hex[3]}${hex[4]}`;
    blue = +`0x${hex[5]}${hex[6]}`;
  }

  return {
    red,
    green,
    blue,
  };
}

export function rgbToHex({ red, green, blue }: RGBColor) {
  let r = red.toString(16);
  let g = green.toString(16);
  let b = blue.toString(16);

  if (r.length == 1) {
    r = "0" + r;
  }
  if (g.length == 1) {
    g = "0" + g;
  }
  if (b.length == 1) {
    b = "0" + b;
  }

  return `#${r}${g}${b}`;
}

export function rgbToCssProperty({ red, green, blue }: RGBColor): string {
  return `rgb(${red},${green},${blue})`;
}

/**
 * HSL Color Space
 */

export function hexToHSL(hex: string): HSLColor {
  const { red, green, blue } = hexToRGB(hex);

  const redFactor = red / 255;
  const greenFactor = green / 255;
  const blueFactor = blue / 255;

  const cmin = Math.min(redFactor, greenFactor, blueFactor);
  const cmax = Math.max(redFactor, greenFactor, blueFactor);
  const delta = cmax - cmin;

  let hue = 0;
  let saturation = 0;
  let lightness = 0;

  if (delta == 0) {
    hue = 0;
  } else if (cmax == redFactor) {
    hue = ((greenFactor - blueFactor) / delta) % 6;
  } else if (cmax == greenFactor) {
    hue = (blueFactor - redFactor) / delta + 2;
  } else {
    hue = (redFactor - greenFactor) / delta + 4;
  }

  hue = Math.round(hue * 60);

  if (hue < 0) {
    hue = hue + 360;
  }

  lightness = (cmax + cmin) / 2;
  saturation = delta === 0 ? 0 : delta / (1 - Math.abs(2 * lightness - 1));

  saturation = +(saturation * 100).toFixed(1);
  lightness = +(lightness * 100).toFixed(1);

  return {
    hue,
    saturation,
    lightness,
  };
}

export function hslToHex(params: HSLColor) {
  const { hue, saturation, lightness } = params;

  const saturationFraction = saturation / 100;
  const lightnessFraction = lightness / 100;

  const chroma = (1 - Math.abs(2 * lightnessFraction - 1)) * saturationFraction;
  const firstBeingChroma = chroma * (1 - Math.abs(((hue / 60) % 2) - 1));
  const matchLightness = lightnessFraction - chroma / 2;

  let red = 0;
  let green = 0;
  let blue = 0;

  if (0 <= hue && hue < 60) {
    red = chroma;
    green = firstBeingChroma;
    blue = 0;
  } else if (60 <= hue && hue < 120) {
    red = firstBeingChroma;
    green = chroma;
    blue = 0;
  } else if (120 <= hue && hue < 180) {
    red = 0;
    green = chroma;
    blue = firstBeingChroma;
  } else if (180 <= hue && hue < 240) {
    red = 0;
    green = firstBeingChroma;
    blue = chroma;
  } else if (240 <= hue && hue < 300) {
    red = firstBeingChroma;
    green = 0;
    blue = chroma;
  } else if (300 <= hue && hue < 360) {
    red = chroma;
    green = 0;
    blue = firstBeingChroma;
  }

  red = Math.round((red + matchLightness) * 255);
  green = Math.round((green + matchLightness) * 255);
  blue = Math.round((blue + matchLightness) * 255);

  return rgbToHex({ red, green, blue });
}

export function hslToCssProperty({
  hue,
  saturation,
  lightness,
}: HSLColor): string {
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
