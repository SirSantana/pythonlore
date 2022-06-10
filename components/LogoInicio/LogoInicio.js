import Link from "next/link";
import Image from "next/image";
import styles from "./LogoInicio.module.css";

export default function LogoInicio() {
  return (
    <div style={{display:'block', cursor:'pointer'}} className={styles.image}>
      <Link href={"/"}>
      <Image
      quality={100}
        src={"/images/serpiente.png"}
        width={180}
        height={130}
        alt={"Logo TH"}
      />
    </Link>
    </div>
  );
}
