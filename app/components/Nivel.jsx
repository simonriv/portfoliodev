import styles from "../../styles/components/Nivel.module.css"

export function Nivel(props){
  const { level } = props;

  const b = level !== null ? `${styles.init} ${styles.active}` : `${styles.init}`
  const bi = level === 'BI' ? `${styles.active}` : level === 'I' ? `${styles.active}` : level === 'IA' ? `${styles.active}` : level === 'A' ? `${styles.active}` : null
  const i = level === 'I' ? `${styles.active}` : level === 'IA' ? `${styles.active}` : level === 'A' ? `${styles.active}` : null
  const ia = level === 'IA' ? `${styles.active}` : level === 'A' ? `${styles.active}` : null
  const a = level === 'A' ? `${styles.end} ${styles.active}` : `${styles.end}`

  return(
    <div className={styles.nivelContainer}>
      <div className={b}><span>Básico</span></div>
      <div className={bi}><span>Básico - Intermedio</span></div>
      <div className={i}><span>Intermedio</span></div>
      <div className={ia}><span>Intermedio - Avanzado</span></div>
      <div className={a}><span>Avanzando</span></div>
    </div>
  )
}
