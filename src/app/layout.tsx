import './globals.css'
import { Header } from '../components/Header/Header';
import { Container } from '../components/Container/Container';
import { Footer } from '../components/Footer/Footer';
import { roboto, sfProText } from '../fonts';
import classNames from 'classnames';
import { StoreProvider } from '@/redux/StoreProvider';
import React from 'react';

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
      <body className={classNames(roboto.variable, sfProText.variable)}>
        <StoreProvider>
          <Header />
          <main>
            <Container>
              {children}
            </Container>
          </main>
          <Footer />
        </StoreProvider> 
      </body>
    </html>
  )
}
