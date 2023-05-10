import Link from "next/link"
import styles from "../styles/pages/home.module.css"
import { Works } from "./components/Works"

export default function HomePage () {
  return (
    <main>
      <section className={styles.banner}>
        <Link href="/about">HOLA, MI NOMBRE ES SIMÓN</Link>
        <h1>Soy desarrollador de software.</h1>
        <p>Soy desarrollador front-end y back-end y fundador de Dvloped,<br/> agencia de software en Colombia.</p>
      </section>
      <Works/>
    </main>  
  )
}
