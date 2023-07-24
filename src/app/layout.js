import './globals.css'
import { Inter,Alata } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

const inter = Inter({ subsets: ['latin'] })
const alata = Alata({weight:"400", subsets: ["latin"]})


export const metadata = {
  title: 'BlogHub',
  description: 'The only place for your blogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alata.className}>
        <div className="container">
          <Navbar/>
          {children}
          <Footer/>
        </div>
      </body>
    </html>
  )
}
