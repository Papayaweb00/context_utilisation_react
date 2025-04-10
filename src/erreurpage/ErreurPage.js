import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../context/ThemeContextProvider';

function ErreurPage() {
    const [theme] = useContext(ThemeContext);
    // localStorage.setItem('theme', theme)

    const colorBackground = theme === 'dark' ? '#000' : "#fff"
    // const colorBackground2 = theme !== 'dark' ? '#000' : "#fff"
    const colorText = theme === 'dark' ? '#fff' : "#000"
    // const colorText2 = theme === 'dark' ? '#000' : "#fff"

    return (
        <div className='App mt-5 py-5' style={{
            background: colorBackground,
            color: colorText
        }} >
            <h3 className='mt-5 pt-5'>This page is not found</h3>
            <p>😥😥Thank you for joining the home page</p>
            <Link to={'/'} className='btn btn-warning  mb-5'>Back to Homepage....</Link>
        </div>
    )
}

export default ErreurPage
