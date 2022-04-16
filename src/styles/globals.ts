import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    font-family: 'Objective';
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Objective';
    src: local('Objective'), url(fonts/Objective/Objective-Regular.otf) format('truetype');
  }
  
  @font-face {
    font-family: 'Objective';
    src: local('Objective'), url(fonts/Objective/Objective-Medium.otf) format('truetype');
    font-weight: 500;
  }
  
  @font-face {
    font-family: 'Objective';
    src: local('Objective'), url(fonts/Objective/Objective-Bold.otf) format('truetype');
    font-weight: 800;
  }
  
  @font-face {
    font-family: 'Objective';
    src: local('Objective'), url(fonts/Objective/Objective-Black.otf) format('truetype');
    font-weight: bold;
  }
`

export default GlobalStyle
