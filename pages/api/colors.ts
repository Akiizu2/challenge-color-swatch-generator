import { NextApiRequest, NextApiResponse } from "next";

import configs from "../../core/configs/color-spaces.config";
import { generateColors } from "../../core/services/color.service";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const numOfColors = +req.query?.size || 5;
  const colorSpaces = generateColors(configs, numOfColors);

  res.status(200).json(colorSpaces);
}
