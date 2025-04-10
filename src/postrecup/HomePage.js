import React, { useContext } from 'react'
import PostRecup from './PostRecup'
import BlogList from './BlogList';
import { ThemeContext } from '../context/ThemeContextProvider';

function HomePage() {
    const { data: blog, loading, error } = PostRecup('https://jsonplaceholder.typicode.com/posts/')
    const [theme] = useContext(ThemeContext);

    // console.log(blog);
    const colorBackground2 = theme !== 'dark' ? '#fff' : "#000"
    const colorText2 = theme === 'dark' ? '#fff' : "#000"

    return (
        <div className='py-5' style={{ background: colorBackground2, color: colorText2 }}>
            <div className='pt-5'></div>
            {error && <h2>{error}</h2>}
            {blog && <BlogList title={'Blog Element'} blogs={blog} />}
            {loading && <h3>loading....</h3>}
        </div>
    )
}

export default HomePage
