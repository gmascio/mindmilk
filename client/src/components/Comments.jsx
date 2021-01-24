import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { commentURL, config } from "../services";
import axios from "axios";
import CommentList from "../components/CommentList"
import Commentform from "../components/Commentform.jsx"

function Comments(props) {
 
  const [comments, setComments] = useState("");
  const params = useParams();

  useEffect(() => {
    const getComments = async () => {
      const resp = await axios.get(commentURL, config);
      setComments(resp.data.records);
    };
    getComments();
  }, []);

  const specificPost = props.posts.filter((post) => post.id == params.id);

  

  if (!specificPost) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }
  return (
    <main>
      <h2>Comments Feed</h2>
      <div className="post">
        <h1>{specificPost[0].fields.name}</h1>
        <img className="icons" src={specificPost[0].fields.image} />
        <p>{specificPost[0].fields.posts}</p>

        
        
      </div>
      <div>
      {comments && 
          <CommentList setToggleFetch={props.setToggleFetch} comments={comments} id={params.id} />
        
        }
        <Commentform/>

        </div>
    </main>
  );
}

export default Comments;
