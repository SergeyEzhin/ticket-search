import './globals.css'
import { Header } from './components/Header/Header';
import { Container } from './components/Container/Container';
import { Footer } from './components/Footer/Footer';
import { roboto } from './fonts';

export const metadata = {
  title: 'Билетопоиск',
  description: 'Сервис для покупки билетов'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className={`${roboto.className}`}>
        <Header />
        <main>
          <Container>
            {children}
          </Container>
        </main>
        <Footer />
      </body>
    </html>
  )
}
