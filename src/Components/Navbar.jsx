import { Link } from "react-router-dom";


export default function Navbar() {

  
  const Click = () => {
    document.getElementById("ul").style.display="flex";
  }
  const DbClick = () => {
    document.getElementById("ul").style.display="none";
   }
  return (
    <header>
      <div>
        <h2>HBSales</h2>
        <i className="fa-solid fa-bars-staggered" onClick={() => Click()} onDoubleClick={()=>DbClick()}></i>
      </div>
      <nav>
        <ul id="ul">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
