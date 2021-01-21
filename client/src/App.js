import './App.css';
import axios from "axios";
import { baseURL, config } from "./services";
import { useEffect, useState } from "react";
import Nav from "./components/Nav"
import Home from "./components/Home"

function App() {
  {/* save posts in state */}
    const [posts, setPosts] = useState([]);
  {/* get data from API */}
  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(baseURL, config);
      setPosts(resp.data.records);
      console.log(resp)
    };
    getPosts();
  }, []);
    return (
      <div className="App">
        <Nav />
        <Home posts={posts}/>
    </div>
  );
}

export default App;
