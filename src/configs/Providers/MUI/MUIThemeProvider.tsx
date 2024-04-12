import { ThemeProvider } from "@emotion/react"
import { theme } from "../../theme/theme"
import { MUIThemeProviderPorps } from "./MUIThemeProvider.types"

export const MUIThemeProvider = (props: MUIThemeProviderPorps) => {
  return (
    <ThemeProvider theme={theme}>
        {props.children}
    </ThemeProvider>
  )
}
