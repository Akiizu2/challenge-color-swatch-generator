# Color Generator

## Dependencies

- NestJS
- MaterialUI --- https://mui.com/

## How to run

### Install dependencies

```
npm install
```

### Run on local

```
npm build & npm start
```

## How to extend new color space

To add new color space. There're two file need to be update.

- `color-spaces.config.d.ts` -- Type declaration file
- `color-spaces.config.ts` -- Color space configs file

### Steps

1. Go to `core/types/color-spaces.config.d.ts` and add new type

```javascript
export interface ColorSpaceConfigs {
  rgb: ColorSpaceMethods<RGBColor>;
  hsl: ColorSpaceMethods<HSLColor>;

  // Extending custom color space
  brgb: ColorSpaceMethods<any>;
}
```

2. Go to `core/configs/color-spaces.config.ts` and add a new color space config. there're required three methods.
   - `toHex` -- convert the custom color space to be hex format
   - `fromHex` -- convert from hex format to be custom color space
   - `toCssProperty` -- format from the custom color space to be `css` property string.

```javascript
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
  brgb: {
    toHex: brgbToHex,
    fromHex: hexToBRGB,
    toCssProperty: brgbToCssProperty,
  },
};
```
