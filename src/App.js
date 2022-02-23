import { ChakraProvider } from "@chakra-ui/react";
import Rotas from './Routes';
import CustomTheme from './Style';

function App() {
  return (
    <ChakraProvider theme={CustomTheme}>
      <Rotas/>
    </ChakraProvider>
  )
}

export default App;