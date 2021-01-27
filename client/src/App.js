import './App.css';
import axios from "axios";
import { baseURL, config } from "./services";
import { useEffect, useState } from "react";
import Nav from "./components/Nav"
import Home from "./components/Home"
import PostsForm from './components/PostsForm';
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Comments from "./components/Comments";
import Resources from "./components/Resources"

function App() {
 
  const [posts, setPosts] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);
 
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
      <Switch>
        <Route exact path= "/">
          <Home posts={posts} />
        </Route>
        <Route path = "/newpost">
          <PostsForm setToggleFetch={setToggleFetch} />
        </Route>
            {posts &&
          <Route path="/posts/:id">
              <Comments setToggleFetch={setToggleFetch} posts={posts} />
          </Route>
            }
          <Route>
            <Resources path = "/resources"/>
          </Route>
      </Switch>
          <Footer />
    </div>
  );
}

export default App;
