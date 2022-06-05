import Link from 'next/link'
import Image from 'next/image'


export default function LogoInicio(){
    return(
        <Link href={'/'}>
          <Image
          src={"/images/serpiente.png"}
          width={180}
          height={130}
          alt={"Logo TH"}
          style={{cursor:'pointer'}}
        />
          </Link>
    )
}