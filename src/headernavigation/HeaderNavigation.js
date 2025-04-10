import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider'

function HeaderNavigation() {
    const [theme, setTheme] = useContext(ThemeContext);
    // localStorage.setItem('theme', theme)

    const colorBackground = theme === 'dark' ? '#000' : "#fff"
    const colorBackground2 = theme !== 'dark' ? '#000' : "#fff"
    const colorText = theme === 'dark' ? '#fff' : "#000"
    const colorText2 = theme === 'dark' ? '#000' : "#fff"

    return (
        <div className='fixed-top w-100'>
            <nav className="navbar navbar-expand-lg" style={{
                background: colorBackground,
                color: colorText
            }}>
                <div className="container d-flex align-items-center justify-content-around ">
                    <h3>Final</h3>

                    <div className='mx-auto'>
                        <select className='rounded-3' id='selection' value={theme} onChange={(e) => {
                            setTheme(e.target.value)
                        }}
                            style={{ background: colorBackground2, color: colorText2 }}>
                            <option value="dark">Dark</option>
                            <option value="light">Light</option>
                        </select>
                    </div>

                    <button className="navbar-toggler" style={{ background: colorBackground2 }} type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars" style={{ color: colorText2 }}></i>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav m-auto d-block d-lg-none">
                            <li className="nav-item">
                                <a href="/" className="nav-link active" style={{ color: colorText }} aria-current="page">Acceuil</a>
                            </li>

                            {/* <li className="nav-item">
                                <a href="/propos" className="nav-link" style={{ color: colorText }}>A-propos</a>
                            </li> */}
                        </ul>
                    </div>

                    <ul className="navbar-nav d-none d-lg-flex align-items-center">
                        <li className="nav-item">
                            <a href="/" className="nav-link active" aria-current="page" style={{ color: colorText }}>Acceuil</a>
                        </li>

                        {/* <li className="nav-item">
                            <a href="/propos" className="nav-link" style={{ color: colorText }}>A-propos</a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default HeaderNavigation
