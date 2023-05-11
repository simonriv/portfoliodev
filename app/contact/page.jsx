import { Banner } from "../components/Banner"
import Link from "next/link"
import styles from "../../styles/pages/contact.module.css"

export default function ContactPage(){
  return (
    <main>
      <Banner title="Contáctame."/>
      <p className={styles.descContact}>Si deseas contactarme o lo requieres por alguna postulación, mi correo electrónico es  
      <span> simonriver145@gmail.com </span>y puedes escribirme a WhatsApp dando <Link href="#" target="_blank">clic aquí.</Link></p>
    </main>
  )
}
