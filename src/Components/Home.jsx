import { Link } from "react-router-dom"
import Contact from "./Contact";
import Content from "./Content";
import Landing from "./Landing";
export default function Home() {
  return (
    <Link to="/">
      <Landing />
      <Content />
      <Contact/>
    </Link>
  );
}
