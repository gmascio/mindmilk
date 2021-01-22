import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
function Postsform(props) {
  const [name, setName] = useState("Anonymous");
  const [image, setImage] = useState("URL");
  const [post, setPost] = useState("What's on your mind?");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name,
      image,
      post,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((prev) => !prev);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <h4>Make a New MindMilk Post!</h4>
      <label htmlFor="name">Name:</label>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="image">Image:</label>
      <input
        name="image"
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <label htmlFor="post">Post:</label>
      <input
        name="post"
        type="text"
        value={post}
        onChange={(e) => setPost(e.target.value)}
      />
      <button type="submit">Get Some MindMilk</button>
    </form>
    </div>
  )
}
export default Postsform;