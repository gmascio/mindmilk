import { Link } from "react-router-dom";


function Nav() {
  return (
    <div>
      <nav>
        <ul>
          <Link to="/newpost">
            <li id="post">Post Form</li>
          </Link>
          <Link to= "/resources">
            <li id="feed"> Mental Health Resources</li>
          </Link>
          
      </ul>
          <img src= "https://ychef.files.bbci.co.uk/976x549/p08vpmjp.webp"/>
        <Link to="/">
          <h1>MindMilk</h1> 
        </Link>
      <h2>Milk for the Mind</h2>
        
    </nav>

    </div>
  )
}
export default Nav;