import type { AppProps } from 'next/app'
import { Metadata } from 'next';
import ErrorBoundary from './ErrorPage'
import '@vercel/examples-ui/globals.css'
 
export const metadata = {
  title: 'Top 100 Weekly Billboard',
  description: 'The billboard top 100 weekly chart displayed beautifully with zero ads',
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  )
}