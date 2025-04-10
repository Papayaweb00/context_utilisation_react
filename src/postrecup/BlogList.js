import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContextProvider';

function BlogList({ title, blogs }) {
        const [theme] = useContext(ThemeContext);
    
        // console.log(blog);
        const colorBackground = theme !== 'dark' ? '#000' : "#fff"
        const colorText = theme === 'dark' ? '#fff' : "#000"

    return (
        <div>
            <h2>{title}</h2>

            <div id='change' className='p-5 d-flex'>
                {
                    blogs.map((blog, k) => (
                        <div className="card w-100 hauteur rounded-4" key={k} style={{ background: colorBackground, color: colorText }}>
                            <a href={`/article/${blog.id}`} className='text-decoration-none'>
                                <div className="card-body">
                                    <h5>{blog.title}</h5>
                                    {/* <h1>{blog.body}</h1> */}
                                </div>
                            </a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BlogList
