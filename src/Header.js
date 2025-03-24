import React, { useContext } from 'react'
import './App.css'
import { ThemeContext, PoliceContext } from './ThemeContext'

//ternaire:  test ? code à exécuter si true : code à exécuter si false.

function Header() {
  const [theme] = useContext(ThemeContext);
      // console.log(theme);
  
  const [police] = useContext(PoliceContext);
      // console.log(police);
  

  const themeColor = theme === "dark" ? "#000" : "#fff" ;
  const textColor = theme === "dark" ? "#fff" : "#000";

  return (
    <header style={{
      backgroundColor: themeColor,
      color: textColor,
      fontFamily: police
    }} className='App-header'>
      {/* utilisons le contexte de thème pour afficher
      le texte "Thème : [couleurPrincipale]
      -
      Police : [police] */}

      <p>
        Theme: {theme}
      </p>
      <p>
        Police: {police}
      </p>
    </header>
  )
}

export default Header




// import React, { Component } from 'react'
// import { ThemeContext } from './ThemeContext';

// class Header extends Component {
//   static contextType = contextTheme;

//   render() {
//     console.log(this.context);
//     // if (!this.context) {
//     //   return <p>Chargement du thème...</p>;
//     // }
    
//     const { defaultTheme, defaultPolice } = this.context

//     const theme = defaultTheme === 'black' ? '#000' : '#fff';
//     const themeColor = defaultTheme === 'black' ? '#fff' : '#000';

//     return (
//       <div style={{
//         background: theme,
//         color: themeColor,
//         fontFamily: defaultPolice
//       }}>
//         <p>
//           Theme: {this.context.defaultTheme}
//         </p>
//         <p>
//           Police: {this.context.defaultPolice}
//         </p>
//       </div>
//     )
//   }
// }

// export default Header

