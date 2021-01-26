import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { commentURL, config } from "../services";
import axios from "axios";
import CommentList from "../components/CommentList";
import Commentform from "../components/Commentform.jsx";

function Comments(props) {
  const [comments, setComments] = useState("");
  const [commentToggle, setCommentToggle] = useState(false)
  const params = useParams();
  console.log (props.posts)

  useEffect(() => {
    const getComments = async () => {
      const resp = await axios.get(commentURL, config);
      setComments(resp.data.records);
    };
    getComments();
  }, [commentToggle]);

  const specificPost = props.posts.find((post) => post.id === params.id);

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

      { specificPost &&
        <>
      <div className="post">
        <h1>{specificPost.fields.name}</h1>
        <img className="icons" src={specificPost.fields.image} alt="profilepic"/>
        <p>{specificPost.fields.posts}</p>
      </div>
      <div>
        {comments && (
          <CommentList
            setToggleFetch={props.setToggleFetch}
            comments={comments}
            id={params.id}
          />
        )}
        <Commentform specificPost={specificPost} setCommentToggle={setCommentToggle}/>
          </div>
          </>
      }
    </main>
  );
}

export default Comments;
