import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

export const roboto = Roboto({ 
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap'
});

export const sfProText = localFont({
  src: [
    {
      path: './fonts/SFProText-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: './fonts/SFProText-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: './fonts/SFProText-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: './fonts/SFProText-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
});