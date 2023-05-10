import styles from "../../styles/components/Banner.module.css"

export function Banner(props){
  return(
    <section className={styles.bannerPage}>
      <h1>{props.title}</h1>
    </section>
  )
}
