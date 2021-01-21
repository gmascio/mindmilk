
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

            </div>
          )
        })}
      </main>
    </div>
  )
}

export default Home;