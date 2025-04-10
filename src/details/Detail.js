import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import PostRecup from '../postrecup/PostRecup'
import { ThemeContext } from '../context/ThemeContextProvider'

function Detail() {
    const { id } = useParams()
    const { data: blog, loading, error } = PostRecup('https://jsonplaceholder.typicode.com/posts/' + id)
    // console.log(id);

    const [theme] = useContext(ThemeContext);

    // console.log(blog);
    const colorBackground = theme !== 'dark' ? '#fff' : "#000"
    const colorText = theme === 'dark' ? '#fff' : "#000"

    return (
        // <div></div>
        <div className='py-5 mt-5' style={{ background: colorBackground, color: colorText }}>
            {loading && <h3>Loading....</h3>}
            {error && <h1>{error}</h1>}
            {blog && (
                <article className='py-5'>
                    <h3>{blog.title}</h3>
                    <p>{blog.body}</p>
                </article>
            )}
        </div>
    )
}

export default Detail
