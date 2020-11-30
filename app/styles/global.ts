import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  /* cardo-regular - latin */
  @font-face {
    font-family: 'Cardo';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/cardo-v13-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('./fonts/cardo-v13-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./fonts/cardo-v13-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('./fonts/cardo-v13-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('./fonts/cardo-v13-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./fonts/cardo-v13-latin-regular.svg#Cardo') format('svg'); /* Legacy iOS */
  }

  /* berkshire-swash-regular - latin */
  @font-face {
    font-family: 'Berkshire Swash';
    font-style: normal;
    font-weight: 400;
    src: url('../fonts/berkshire-swash-v9-latin-regular.eot'); /* IE9 Compat Modes */
    src: local(''),
         url('./fonts/berkshire-swash-v9-latin-regular.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
         url('./fonts/berkshire-swash-v9-latin-regular.woff2') format('woff2'), /* Super Modern Browsers */
         url('./fonts/berkshire-swash-v9-latin-regular.woff') format('woff'), /* Modern Browsers */
         url('./fonts/berkshire-swash-v9-latin-regular.ttf') format('truetype'), /* Safari, Android, iOS */
         url('./fonts/berkshire-swash-v9-latin-regular.svg#BerkshireSwash') format('svg'); /* Legacy iOS */
  }
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      background: ${(props) => props.theme.colors.background};
      font-size: 14px;
      color: ${(props) => props.theme.colors.text};
      font-family: Cardo, serif;
    }
    h1,h2,h3,h4,h5,h6 {
      font-family: 'Berkshire Swash', cursive;
    }
`
