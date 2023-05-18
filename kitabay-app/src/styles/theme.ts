import { Montserrat } from "next/font/google";
import { extendTheme } from "@chakra-ui/react"

export const montserrat = Montserrat({ subsets: ['latin'] });

export const theme = extendTheme({
    colors: {
        background: '#FDFBF3',
    }
});