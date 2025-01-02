import { createGlobalStyle } from 'styled-components'
import { theme } from './theme'
import normalize from 'styled-normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: ${theme.fontSize.sm};
    overflow-y: scroll;
  }

  body {
    font-family: ${theme.fontFamaily.base};
  }
    
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fontFamaily.title};
    letter-spacing: -0.125rem;
  }
  a {
    text-decoration: none;
    transition: all 0.3s ease-in-out;
  }
`
export default GlobalStyle
