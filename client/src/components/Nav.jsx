import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <img
          src="https://ychef.files.bbci.co.uk/976x549/p08vpmjp.webp"
          alt="Milk"
        />
        <Link className="home-link" to="/">
          <h1>MindMilk</h1>
        </Link>
        <h2>Milk for the Mind</h2>
        <ul>
          <Link to="/resources">
            <li id="feed"> Mental Health Resources</li>
          </Link>
          <Link to="/newpost">
            <li id="post">Post Form</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
