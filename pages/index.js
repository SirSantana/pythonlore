import Head from "next/head";
import Image from "next/image";
import Carrousel from "../components/Carrousel/Carrousel";
import { ImagesData } from "../components/Carrousel/ImagesData";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title={"Home | Python"}>
      <div style={{ marginLeft: "auto", marginRight: "auto" }}>
      
        <h2
          style={{
            fontSize: "50px",
            color: "#f1f1f1",
            textAlign: "center",
            marginBottom: 0,
            marginTop:0
          }}
        >
          Python
        </h2>
        <h4 style={{ marginTop: 0, color: "#f1f1f1", textAlign: "center" }}>
          Jewerly.
        </h4>
        {/* <Image
          src={"/images/Logo THHH.png"}
          width={60}
          height={30}
          alt={'Logo TH'}
        /> */}
        

        {/* <div>
        <Image
          src={"/images/cadena de plata hombre david ig.jpg"}
          width={200}
          height={150}
          alt={"Logo TH"}
        />
        </div> */}
        <Carrousel slides={ImagesData}/>
      </div>
    </Layout>
  );
}
