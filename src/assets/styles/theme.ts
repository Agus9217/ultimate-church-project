import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';
import { extendTheme } from "@chakra-ui/react";


export const themeApp = extendTheme({
  fonts: {
    body: `'Poppins', sans-serif;`,
    heading: `'Poppins', sans-serif;`
  }
})
