import Link from "next/link"
import styles from "../../styles/components/Works.module.css"

export function Works(){
  return(
    <section className={styles.lastWorksContainer}>
      <h2 className={styles.titleLastWorksContainer}>Últimos Trabajos</h2>
      <section className={styles.lastWorsGrid}>
        <div className={styles.itemWorksGrid}>
          <Link href="#">
            <h3>The title for item work</h3>
            <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
          </Link>
        </div>
      </section>
      <section className={styles.btnSeeMore}>
        <Link href="/work" >Ver más trabajos {'>'}</Link>
      </section>
    </section>
  )
}
