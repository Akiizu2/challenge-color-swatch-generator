import type { ColorSpace } from "../types/color-spaces";
import type { ColorSpaceConfigs } from "../types/color-spaces.config";

import { getRandomHexColors } from "../utils/color";
import { randomDecimal } from "../utils/math";

function getAvailableColorSpace(configs: ColorSpaceConfigs) {
  return Object.keys(configs);
}

export function generateColors(
  configs: ColorSpaceConfigs,
  size: number
): ColorSpace[] {
  const availableColorSpaces = getAvailableColorSpace(configs);
  const lenghtOfColorSpace = availableColorSpaces.length;

  const randomColorSpaces = [];
  const randomColors = getRandomHexColors(size);

  for (let index = 0; index < size; index++) {
    const randomIndex = randomDecimal(0, lenghtOfColorSpace - 1);
    const colorSpace = availableColorSpaces[
      randomIndex
    ] as keyof ColorSpaceConfigs;

    randomColorSpaces.push({
      [colorSpace]: configs[colorSpace].fromHex(randomColors[index]),
    });
  }

  return randomColorSpaces;
}

export function transformHexToColorCSSProperties(
  configs: ColorSpaceConfigs,
  hexColor: string
): {
  type: string;
  value: string;
}[] {
  const availableColorSpaces = getAvailableColorSpace(configs);
  return availableColorSpaces.map((colorSpace) => {
    const config = configs[colorSpace as keyof ColorSpaceConfigs];
    const color = config.fromHex(hexColor);

    return {
      type: colorSpace,
      value: config?.toCssProperty(color),
    };
  });
}
