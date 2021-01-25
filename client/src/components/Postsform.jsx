import { useState } from "react";
import axios from "axios";
import { baseURL, config } from "../services";
import { useHistory } from "react-router-dom";
import useSound from "use-sound";
import Pour from "../audio/pouring.mp3";

function Postsform(props) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [post, setPost] = useState("");
  const history = useHistory();

  let audio = new Audio(Pour);
  const start = () => {
    audio.play();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fields = {
      name: name,
      image:
        image === ""
          ? "https://i.ibb.co/xjQBgJs/Anonymous-Mask-Hd-Anonymous-mask-by.jpg"
          : image,
      posts: post,
    };
    await axios.post(baseURL, { fields }, config);
    props.setToggleFetch((prev) => !prev);
    history.push("/");
  };

  return (
    <div>
      <form className="postform" onSubmit={handleSubmit}>
        <h4>Make a New MindMilk Post!</h4>
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          placeholder="Anonymous"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="image">Image:</label>
        <input
          name="image"
          type="text"
          placeholder="URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="post">Post:</label>
        <input
          name="post"
          type="textarea"
          placeholder="Post"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />

        <button type="submit" onClick={start}>
          Get Some MindMilk!
        </button>
      </form>
    </div>
  );
}
export default Postsform;
