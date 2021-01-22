
import { Link } from "react-router-dom"

function Home(props) {
  
  return (
    <div>
      <main>
        <h2>MindMilk Feed</h2>
        {props.posts.map((post) => {
          console.log(post)
          return (
            <div class= "post">
              <h1>{post.fields.name} </h1>
              <img className= "icons" src= {post.fields.image}/>
              <p>{post.fields.posts} </p>
              <Link key={post.id} to={`/posts/${post.id}`} >
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