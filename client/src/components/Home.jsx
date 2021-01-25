import { Link } from "react-router-dom";
import Modal from "react-modal";
import Modallist from "../components/Modallist";
import { useState } from "react";

function Home(props) {
  const sortedPosts = props.posts.sort((a, b) => {
    return (
      new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
    );
  });
  console.log(props.posts);
  console.log(sortedPosts);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const setModalIsOpenToTrue = () => {
    setModalIsOpen(true);
  };
  const setModalIsOpenToFalse = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="home">
      <main>
        <div className="mission">
          <button className="mission" onClick={setModalIsOpenToTrue}>
            MindMilk Mission
          </button>
          <Modal isOpen={modalIsOpen}>
            <button onClick={setModalIsOpenToFalse}>x</button>
            <Modallist />
          </Modal>
        </div>

        <h2 className="MindMilkFeed">MindMilk Feed</h2>
        {sortedPosts.map((post) => {
          console.log(post);
          return (
            <div key={post.id} className="post">
              <h1>{post.fields.name} </h1>

              <img className="icons" src={post.fields.image} />
              <p>{post.fields.posts} </p>
              <Link to={`/posts/${post.id}`}>
                <button>Comments</button>
              </Link>
            </div>
          );
        })}
      </main>
    </div>
  );
}

export default Home;
