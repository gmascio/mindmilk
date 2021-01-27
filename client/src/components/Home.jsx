import { Link } from "react-router-dom";
import Modal from "react-modal";
import ModalPage from "./ModalPage";
import { useState } from "react";

function Home(props) {
  const sortedPosts = props.posts.sort((a, b) => {
    return (
      new Date(b.createdTime).getTime() - new Date(a.createdTime).getTime()
    );
  });
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
          <Modal
            style={{ background: "rgb( 300, 300, 300)" }}
            isOpen={modalIsOpen}
          >
            <button onClick={setModalIsOpenToFalse}>Back to MindMilk!</button>
            <ModalPage />
          </Modal>
        </div>

        <h2 className="MindMilkFeed">MindMilk Feed</h2>
        {sortedPosts.map((post) => {
          return (
            <div key={post.id} className="post">
              <div className="profile-container">
                <img
                  className="icons"
                  src={post.fields.image}
                  alt="profilepic"
                />
                <h1>{post.fields.name} </h1>
              </div>
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
