import { Banner } from "../components/Banner"
import Image from "next/image"
import styles from "../../styles/pages/about.module.css"
import Link from "next/link"
import { Nivel } from "../components/Nivel"

export default function AboutPage(){
  return (
    <main>
      <Banner title="Hola."/>
      <section className={styles.bannerAbout}>
        <Image src="/photo_author.jpg" alt="Picture of the author" width={500} height={500}/>
        <p>Me llamo Simón, soy desarrollador de software en back-end y front-end, soy de Medellín, Colombia.<br/>
          He estado creando cosas en la web desde hace 7 años, aprendido diferentes lenguajes y herramientas.<br/>
          Me centro en la creación de software fácil de entender y con tecnología de vanguardia.</p>
      </section>
      <section className={styles.contentAbout}>
        <h2>Trabajo</h2>
        <p>Actualmente, estoy en busca de nuevas oportunidades laborales, para expandir mis conocimientos y aventurarme a nuevos retos.</p>
        <h2>Estudio</h2>
        <p>Me formé como Tecnólogo Analista en desarrollo de sistemas de la información en el SENA (Colombia).<br/><br/>
          Dentro de esta misma institución realice un estudio de idiomas en inglés hasta un nivel Intermedio y con cursos en diferentes plataformas webs he ido expandiendo mi conocimiento.
          <br/><br/>
          <Link href="/certificates/Certificado - Sena - Tecnologo en analisis y desarrollo de sistemas de la información.pdf" target="_blank">Ver Diploma de Tecnólogo</Link>
          <br/><br/>
          <Link href="/certificates/Certificado - Sena - English Beginner.pdf" target="_blank">Ver Certificados de Inglés Nivel Básico I</Link><br/>
          <Link href="/certificates/Certificado - Sena - English Dot Works 2.pdf" target="_blank">ver Certificados de Inglés Nivel Básico II</Link><br/>
          <Link href="/certificates/Certificado - Sena - English Dot Works 3.pdf" target="_blank">Ver Certificados de Inglés Nivel Básico III</Link><br/>
          <Link href="/certificates/Certificado - Sena - English Level 1.pdf" target="_blank">Ver Certificados de Inglés Nivel Intermedio I</Link><br/>
          <Link href="/certificates/Certificado - Sena - English Level 2.pdf" target="_blank">Ver Certificados de Inglés Nivel Intermedio II</Link><br/>
          <Link href="/certificates/Certificado - Sena - English Level 3.pdf" target="_blank">Ver Certificados de Inglés Nivel Intermedio III</Link>
        </p>
        <h2>Experiencia</h2>
        <p>Durante dos años tuve la oportunidad de trabajar como desarrollador para una empresa local donde puse en práctica mis conocimientos de la web creando desde landing pages hasta apps webs.<br/><br/> La academia HEADFOX MASTERS me brindo esta oportunidad creando su web donde se exponían los cursos y una app donde se trabajaba un crud para el manejo de información de la academia.</p>
        <h2>Lenguajes</h2>
        <p>Estos son los lenguajes que he manejado y el nivel en el que me encuentro en cada respectivo lenguaje.</p>
        <ul>
          <li><Link href="/certificates/Certificado - Udemy - ReactJs.pdf" target="_blank">React </Link><Nivel level="IA"/></li>
          <li><Link href="#">Java </Link><Nivel level="I"/></li>
          <li><Link href="/certificates/Certificado - Udemy - Express y MongoDB.pdf" target="_blank">MongoDB </Link><Nivel level="I"/></li>
          <li><Link href="#">Mysql </Link><Nivel level="IA"/></li>
          <li><Link href="/certificates/Certificado - Udemy - RestFul NodeJS.pdf" target="_blank">NodeJS </Link><Nivel level="I"/></li>
          <li><Link href="/certificates/Certificado - EDteam - GIT Desde Cero.png" target="_blank">Git </Link><Nivel level="IA"/></li>
          <li><Link href="#">AWS </Link><Nivel level="I"/></li>
          <li><Link href="/certificates/Certificado - EDteam - PHP Desde Cero.png" target="_blank">PHP </Link><Nivel level="A"/></li>
          <li><Link href="/certificates/Certificado - EDteam - GO Desde Cero.png" target="_blank">GO </Link><Nivel level="I"/></li>
        </ul>
    </section>
    </main>
  )
}
