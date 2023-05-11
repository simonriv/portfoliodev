import { Banner } from "../components/Banner"
import Link from "next/link"
import styles from "../../styles/pages/contact.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons"

export default function ContactPage(){
  return (
    <main>
      <Banner title="Contáctame."/>
      <p className={styles.descContact}>Si deseas contactarme o lo requieres por alguna postulación, mi correo electrónico es  
      <span> simonriver145@gmail.com </span>y puedes escribirme a WhatsApp dando <Link href="https://api.whatsapp.com/send/?phone=573216238394&text=vengo+desde+tu+hoja+de+vida&type=phone_number&app_absent=0" target="_blank">clic aquí <FontAwesomeIcon icon={faWhatsapp}/>.</Link></p>
    </main>
  )
}
