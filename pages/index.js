import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Chakra from "../components/Chakra/";
import Rebass from "../components/Rebass/";
import Bumbag from "../components/Bumbag/";
import MaterialUI from "../components/MaterialUI/";

export default function Home() {
  const [lib, setLib] = React.useState(1);

  const handleChangeLib = (event) => {
    setLib(event.target.value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello UI</h1>
      <h2>Which UI do you want to see today?</h2>

      <select onChange={handleChangeLib}>
        <option value="1">Chakra</option>
        <option value="2">Rebass</option>
        <option value="3">Bumbag</option>
        <option value="4">Rimble</option>
        <option value="5">Material UI</option>
      </select>

      <div style={{ marginBottom: "3rem" }} />

      {lib == 1 && <Chakra />}

      {lib == 2 && <Rebass />}

      {lib == 3 && <Bumbag />}

      {lib == 4 && <Chakra />}

      {lib == 5 && <MaterialUI />}
    </div>
  );
}
