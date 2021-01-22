
function Home(props) {
  return (
    <div>
      <main>
        {props.posts.map((post) => {
          return (
            <div class= "post">
              <h1>{post.fields.name} </h1>
              <img className= "icons" src= {post.fields.image}/>
              <p>{post.fields.posts} </p>
              <button>Read More</button>
            </div>
          )
        })}
      </main>
    </div>
  )
}

export default Home;