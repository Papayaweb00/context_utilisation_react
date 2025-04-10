import { useEffect, useState } from 'react'
// import { data } from 'react-router-dom';

function PostRecup(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortFetch = new AbortController()

        const FetchData = async () => {
            try {
                const res = await fetch(url, { signal: abortFetch.signal })
                if (!res.ok) {
                    throw Error('The data is no valid')
                }
                const com = await res.json();
                setData(com)
            } catch (e) {
                if (e.name !== 'AbortError') {
                    setError(e.message)
                }
            } finally {
                setLoading()
            }
        }

        const fil = setInterval(FetchData, 1000);
        return () => {
            abortFetch.abort();
            clearInterval(fil)
        }
    }, [url])



    return { data, loading, error }
}

export default PostRecup
