'use client'

import styles from '../../styles/components/Navigation.module.css'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const links = [{
  label: 'Inicio',
  route: '/',
},{
  label: 'Trabajos',
  route: '/work',
},{
  label: 'Contacto',
  route: '/contact',
},{
  label: 'Sobre mí',
  route: '/about',
}
]

export function Navigation(){
  const currentPage = usePathname();
  return (
    <header className={styles.headerNav}>
      <nav className={styles.nav}>
        <div className={styles.iconDiv}>
          <div className={styles.icon}></div>
          <Link href="/">Simón Rivera</Link>
          <span><FontAwesomeIcon icon={faCircleCheck}/></span>
        </div>
        <input type="checkbox" id="check"/>
        <label htmlFor="check" className={styles.btnMenu}><FontAwesomeIcon icon={faBars}/></label>
        <ul>
          {links.map(({label,route}) => (
            <li key={route} className={currentPage === route ? styles.active : null}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
