import './App.css';
import axios from "axios";
import { baseURL, config } from "./services";
import { useEffect, useState } from "react";
import Nav from "./components/Nav"
import Home from "./components/Home"
import Postsform from './components/Postsform';
import { Link, Route } from "react-router-dom";

function App() {
  {/* save posts in state */}
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
  {/* get data from API */}
  useEffect(() => {
    const getPosts = async () => {
      const resp = await axios.get(baseURL, config);
      setPosts(resp.data.records);
      console.log(resp)
    };
    getPosts();
  }, [toggleFetch]);
    return (
      <div className="App">
        <Nav />
        <Route path= "/">
          <Home posts={posts} />
          </Route>
        <Route path = "/new">
        <Postsform setToggleFetch={setToggleFetch} />
        </Route>
    </div>
  );
}

export default App;
