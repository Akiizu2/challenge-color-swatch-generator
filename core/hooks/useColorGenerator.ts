import axios from "axios";
import { useCallback, useState } from "react";
import { fetchColors } from "../api/color";

import type { ColorSpace } from "../types/color-spaces";

function useColorGenerator() {
  const [loading, setLoading] = useState<boolean>(false);
  const [colors, setColors] = useState<ColorSpace[]>();

  const generate = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchColors();

      setLoading(false);
      setColors(response);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  return {
    colors,
    loading,
    generate,
  };
}

export default useColorGenerator;
