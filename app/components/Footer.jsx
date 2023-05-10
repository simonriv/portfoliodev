import styles from '../../styles/components/Footer.module.css'
import Link from 'next/link'

const items = [{
  str: '© 2023',
  link: '/',
  label: 'Simón Rivera',
  target: '',
},{
  str: 'Contactame',
  link: '/contact',
  label: 'Formulario',
  target: '',
},{
  str: 'Social',
  link: 'https://github.com/simonriv',
  label: 'GitHub',
  target: '_blank',
},{
  str: 'Agency',
  link: '#',
  label: 'Dvloped',
  target: '',
}]

export function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {items.map(({str,link,label,target}) => (
          <p key={link} className={styles.footerItem}>
            <strong>{str}</strong>
            <br/>
            <Link href={link} target={target}>{label}</Link>
          </p>
        ))}
      </div>
    </footer>
  )
}
