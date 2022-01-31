import { extendTheme, theme as base } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        heading: `IBM Plex Sans, ${base.fonts?.heading}`,
        body: `IBM Plex Sans, ${base.fonts?.body}`
    },
    config: {
        initialColorMode: "light",
        useSystemColorMode: false
    }
})

export default theme