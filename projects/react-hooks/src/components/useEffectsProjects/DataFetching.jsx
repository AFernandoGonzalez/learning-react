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
        <section style={{ backgroundColor: "rgba(75,75,75,.3)" }}>
            <h3>Data Fetching</h3>
            <div>
                {error ?
                    (<div className="error-message">{error}</div>)
                    : (
                        <div>
                            <h5>Total Posts {posts.length}</h5>
                            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "12px"}}>
                                {posts.map((post) => (
                                    <li style={{ textAlign: "left"}} key={post.id}>{post.body}</li>
                                ))}
                            </ul>
                        </div>
                    )
                }
            </div>
        </section>
    )
}