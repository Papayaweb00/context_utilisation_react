// ThemeChanger creer avec success
// Importation
import React, { useContext } from 'react'
import './index.css'
import { PoliceContext, ThemeContext } from './ThemeContext';

function ThemeChanger() {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const [theme, setTheme] = useContext(ThemeContext);
    // console.log(theme);

    const [police, setPolice] = useContext(PoliceContext);
    // console.log(police);


    const handleChange = (e) => {
        setPolice(e.target.value)
    }
    const handleChangeTheme = (e) => {
        setTheme(e.target.value)
    }

    const themeColor = theme === "dark" ? "#000" : "#fff";
    const textColor = theme === "dark" ? "#fff" : "#000";

    return (
        <form onSubmit={handleSubmit} style={{
            backgroundColor: themeColor,
            color: textColor,
            fontFamily: police
        }}>
            <h3>Changer Theme</h3>
            <div>
                <label htmlFor="theme">Theme</label>
                {/* <input type="text" value={theme} onChange={handleChangeTheme} /> */}
                <select name="theme" id="themeId" value={theme} onChange={handleChangeTheme}>
                    <option value="dark">Black</option>
                    <option value="light">white</option>
                </select>
            </div>
            <div>
                <label htmlFor="police">Police</label>
                <select name="police" id="policeId" value={police} onChange={handleChange}>
                    <option value="Arial">Arial</option>
                    <option value="Quicksand, sans-serifx`">Quicksand, sans-serif</option>
                    <option value="Courier New">Courier New</option>
                    <option value="Times New Roman">Times New Roman</option>
                </select>
            </div>
        </form>
    )
}

export default ThemeChanger
