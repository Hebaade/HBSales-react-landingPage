import { Link } from "react-router-dom";


export default function Navbar() {

  
  const Click = () => {
    document.getElementById("ul").classList.toggle("display");
  }
  return (
    <header>
      <div>
        <h2>HBSales</h2>
        <i className="fa-solid fa-bars-staggered" onClick={()=>Click()}></i>
      </div>
      <nav>
        <ul id="ul" className="">
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
