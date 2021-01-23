
import { Link } from "react-router-dom"

function Home(props) {
  
  const sortedPosts = props.posts.sort((a,b) => {
    return new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
  })
  console.log(props.posts)
  console.log(sortedPosts)

  return (
    <div>
      <main>
        <h2>MindMilk Feed</h2>
        {sortedPosts.map((post) => {
          console.log(post)
          return (
            <div key={post.id} className= "post">
              <h1>{post.fields.name} </h1>
              <img className= "icons" src= {post.fields.image}/>
              <p>{post.fields.posts} </p>
              <Link to={`/posts/${post.id}`} >
               <button>Comments</button>
              </Link>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default Home;