// 2- Creation du fichier nommé "ThemeContext.js" terminer

//3- Importation des modules nécessaires pour créer un contexte en React.
import { createContext, useState } from 'react'

export const ThemeContext = createContext()
export const PoliceContext = createContext()

function ThemeContextProvider({ children }) {
  // 4- valeurs par défaut du theme et de la police
  const [theme, setTheme] = useState('dark');
  const [police, setPolice] = useState("Quicksand, sans-serif");

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      <PoliceContext.Provider value={[police, setPolice]}>
        {children}
      </PoliceContext.Provider>
    </ThemeContext.Provider>
  )
}

// 5-Exportation des contextes
export default ThemeContextProvider



// // 2- Creation du fichier nommé "ThemeContext.js" terminer

// //3- Importation des modules nécessaires pour créer un contexte en React.
// import { Component, createContext } from 'react'

// export const contextTheme = createContext()
// // export const contextPolice = createContext()

// class ThemeContextProvider extends Component {
//   state = {
//     // 4- valeurs par défaut du theme et de la police
//     defaultTheme: "black",
//     defaultPolice: "Quicksand, sans-serif"
//   }

//   render() {
//     return (
//       <contextTheme.Provider value={this.state}>
//         {/* <contextPolice.Provider value={this.state.defaultPolice}> */}
//           {this.props.Children}
//         {/* </contextPolice.Provider> */}
//       </contextTheme.Provider>
//     )
//   }
// }

// // 5-Exportation des contextes
// export default ThemeContextProvider
