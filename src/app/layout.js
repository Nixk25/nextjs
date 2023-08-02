import './globals.css'
import {Alata } from 'next/font/google'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { ThemeProvider } from './context/ThemeContext'
import AuthProvider from './components/AuthProvider/AuthProvider'

const alata = Alata({weight:"400", subsets: ["latin"]})


export const metadata = {
  title: 'BlogHub',
  description: 'The only place for your blogs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={alata.className}>
        <ThemeProvider>
          <AuthProvider>
            <div className="container">
              <Navbar/>
              {children}
              <Footer/>
            </div>
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
