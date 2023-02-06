import Loading from '@/layout/loading'
import '@/styles/globals.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { createTheme, ThemeProvider, useMediaQuery } from '@mui/material'
import type { AppProps } from 'next/app'

const App = ({ Component, pageProps }: AppProps) => {
  const mode = useMediaQuery('(prefers-color-scheme: dark)') ? 'dark' : 'light'
  const theme = createTheme({
    palette: {
      mode,
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <Loading></Loading>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App
