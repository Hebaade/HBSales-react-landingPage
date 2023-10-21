import {Link} from 'react-router-dom'
export default function Contact() {
  return (
    <div className="contact">
      <h2>Contact us to buy property</h2>
      <p>
        It is our commitment to ensure a professional and enjoyable new home
        buying experience for you. If you want to get a home to start living as
        a family in an area that you love click the button below.
      </p>
      <Link className="Get" to="/contact">
        Get In Touch
      </Link>
    </div>
  );
}
