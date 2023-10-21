import { useEffect, useState } from "react"

const POST_ENDPOINT = "https://jsonplaceholder.typicode.com/posts"

export const DataFetching = () => {

    const [posts, setPosts] = useState([])
    const [error, setError] = useState('')

    useEffect(() => {
        fetch(POST_ENDPOINT)
            .then(res => {
                if (!res.ok) {
                    setError(`Network Response was not ok (Status: ${res.status})`);
                    throw new Error('Network Response was not ok', res.status)
                }
                return res.json()
            })
            .then(data => {
                const newPostsLimit = data.slice(0, 3)
                setPosts(newPostsLimit)
            })
            .catch((err) => {
                // console.log("Error fetching the data: ", err);
                setError(err.message)
            })
    }, [])

    return (
        <main>
            <h3>Data Fetching</h3>
            <div>
                {error ?
                    (<div className="error-message">{error}</div>)
                    : (
                        <div>
                            <h2>Total Posts {posts.length}</h2>
                            <ul>
                                {posts.map((post) => (
                                    <li key={post.id}>{post.title}</li>
                                ))}
                            </ul>
                        </div>
                    )
                }
            </div>
        </main>
    )
}