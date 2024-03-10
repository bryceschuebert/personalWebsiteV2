import { createGlobalStyle } from 'styled-components';
import '../../font.css'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: #EFEFEF;
    font-family: 'Futura', sans-serif;
  }



  h1 {
    font-size: clamp(40px, 50vw, 70px); /* Adjusts from 2.5rem to 3rem as the viewport width grows */
  }
  
  /* Tablet breakpoint */
  @media (min-width: 481px) {
    h1 {
      margin: 0;
      padding: 0;
      font-size: clamp(70px, 50vw, 90px); /* Adjusts from 3rem to 3.5rem as the viewport width grows */
    }
  }
  
  /* Desktop breakpoint */
  @media (min-width: 769px) {
    h1 {
      margin: 0;
      padding: 0;
      font-size: clamp(100px, 50vw, 140px); /* Adjusts from 3.5rem to 5rem as the viewport width grows */
    }
  }



  h2 {
    font-size: 15px; /* Adjusts from 2.5rem to 3rem as the viewport width grows */
  }
  
  /* Tablet breakpoint */
  @media (min-width: 481px) {
    h2 {
      font-size: 20px; /* Adjusts from 3rem to 3.5rem as the viewport width grows */
    }
  }



  p {
    font-size: clamp(100px, 50vw, 150px); /* Adjust values as needed */
    text-align: left;
  }
`;

export default GlobalStyle;
