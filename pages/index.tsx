import type { NextPage } from "next";
import { fetchColors } from "../core/api/color";

import { ColorGenerator } from "../core/containers/color-generator";
import type { ColorSpace } from "../core/types/color-spaces";

import styles from "../styles/Home.module.css";

type HomePageProps = {
  colors: ColorSpace[];
};

const Home: NextPage<HomePageProps> = ({ colors }) => {
  return (
    <div className={styles.container}>
      <ColorGenerator colors={colors} />
    </div>
  );
};

export async function getServerSideProps() {
  const colors = await fetchColors();

  return { props: { colors } };
}

export default Home;
