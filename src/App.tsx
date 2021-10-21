import { ChakraProvider } from '@chakra-ui/react'
import { AnimatePresence } from 'framer-motion';
import './App.css'
import Fonts from './components/Fonts';
import Main from './components/Main'
import Navbar from './components/Navbar';
import theme from './lib/theme'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts/>
      <AnimatePresence exitBeforeEnter initial={true}>
        <Navbar/>
        <Main/>
      </AnimatePresence>
    </ChakraProvider>
  );
}

export default App
