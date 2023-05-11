import '../styles/index.css'
import { Navigation } from './components/Navigation'
import { Footer } from './components/Footer'

export const metadata = {
  title: 'Simón Rivera',
  description: 'Simón Rivera desarrollador de software con experiencia en diferentes áreas, Medellín, Colombia.',
  charset: 'UTF-8',
}
 
export default function RootLayout({ children }) {
 return (
    <html lang="es">
      <head>
        <title>{metadata.title}</title>
        <meta charSet={metadata.charset}/>
        <meta name="description" content={metadata.description} />
        <link rel="icon" type="image/jpg" sizes="32x32" href="/photo_author.jpg"/>
      </head>
      <body>
        <Navigation/>
        {children}
        <Footer/>
      </body>
    </html>
  )
}
