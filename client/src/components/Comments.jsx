import { useParams } from "react-router-dom";

function Comments(props) {
  const params = useParams(); 
  const specificPost = props.posts.filter((post) => post.id == params.id);
  console.log(specificPost)
  if (!specificPost) {
  return (
        <div>
          <h4>Loading...</h4>
        </div>
      );
  }
  return (
    <div>
      <h1>{specificPost[0].fields.name}</h1>
      <h1>{specificPost[0].fields.post}</h1>
    </div >
)  
}

export default Comments;