import React from "react"
import axios from "axios"

const FetchData = () => {
  const [posts, setPosts] = React.useState([])

  const endpoint = "https://jsonplaceholder.typicode.com"

  React.useEffect(() => {
    axios
      .get(endpoint)
      .then(res => {
        console.log(res)
        setPosts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div>
      {posts.map(post => {
        return (
          <ul>
            <li key={post.id}>{post.title}</li>
          </ul>
        )
      })}
    </div>
  )
}

export default FetchData
