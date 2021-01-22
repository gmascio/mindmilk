import { Link } from "react-router-dom";


function Nav() {
  return (
    <div>
      <nav>
      <ul>
          <Link to="/new">
            <li id="post">Post Form</li>
          </Link>
          <Link to= "">
            <li id="feed"> MindHealth Feed</li>
          </Link>
          
      </ul>
        <Link to="/">
          <h1>MindMilk</h1> 
        </Link>
      <h2>Milk for the Mind</h2>
        
    </nav>

    </div>
  )
}
export default Nav;