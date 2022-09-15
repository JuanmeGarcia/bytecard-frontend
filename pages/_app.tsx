import type { AppProps } from 'next/app'
import { FormContextProvider } from '../context/useFormContext'
import '../sass/main.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <FormContextProvider>
      <Component {...pageProps} />
    </FormContextProvider>
)
}

export default MyApp
