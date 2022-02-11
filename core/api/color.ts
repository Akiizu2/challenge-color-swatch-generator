import axios from "axios";
import { ColorSpace } from "../types/color-spaces";

const BASE_URL = "http://localhost:3000";

export async function fetchColors(): Promise<ColorSpace[]> {
  const { data: colors } = await axios.get(`${BASE_URL}/api/colors`);
  return colors;
}
