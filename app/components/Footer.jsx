import styles from '../../styles/components/Footer.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const items = [{
  str: '© 2023',
  link: '/',
  label: 'Simón Rivera',
  target: '',
  ico: null,
},{
  str: 'Contactame',
  link: '/contact',
  label: 'Formulario',
  target: '',
  ico: null,
},{
  str: 'Social',
  link: 'https://github.com/simonriv',
  label: 'GitHub',
  target: '_blank',
  ico: faGithub,
},{
  str: 'Agency',
  link: 'https://dvloped.dev',
  label: 'Dvloped',
  target: '',
  ico: null,
}]

export function Footer(){
  return(
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        {items.map(({str,link,label,target,ico}) => (
          <p key={link} className={styles.footerItem}>
            <strong>{str}</strong>
            <br/>
            <Link href={link} target={target}>{label} {ico !== null ? <FontAwesomeIcon icon={ico}/>: ''}</Link>
          </p>
        ))}
      </div>
    </footer>
  )
}
