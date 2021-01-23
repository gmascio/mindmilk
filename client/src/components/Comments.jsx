import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { commentURL, config } from "../services";
import axios from "axios";
import CommentList from "../components/CommentList"

function Comments(props) {
  // const [name, setName] = useState("");
  // const [image, setImage] = useState("");
  // const [comment, setComment] = useState("");
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   const fields = {
  //     name:name,
  //     image:image,
  //     comments:comment,
  //   };
  //   await axios.post(baseURL, { fields }, config);
  //   props.setToggleFetch((prev) => !prev);

  // };
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

        <form></form>
        
      </div>
      <div>
      {comments && 
          <CommentList comments={comments} id={params.id} />
        
        }
        </div>
    </main>
  );
}

export default Comments;
