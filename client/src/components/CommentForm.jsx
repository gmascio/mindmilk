import React from "react";
import axios from "axios";
import { commentURL, config } from "../services";
import { useState } from "react";
import Pour from "../audio/pouring.mp3";

function CommentForm(props) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      comment,
      name,
      feed: [props.specificPost.id]
    };
    await axios.post(commentURL, { fields }, config);
    props.setCommentToggle((prev) => !prev);
  };
  let audio = new Audio(Pour);
  const start = () => {
    audio.play();
  };

  return (
    <div className="form-container">
      <form className="postform" onSubmit={handleSubmit}>
        <h4>Post a MindMilk Comment!</h4>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          placeholder="Anonymous"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="post">Comment:</label>
        <input
          name="post"
          type="textarea"
          placeholder="Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />

        <button type="submit" onClick={start}>
          Post Some MindMilk!
        </button>
      </form>
    </div>
  );
}

export default CommentForm;
