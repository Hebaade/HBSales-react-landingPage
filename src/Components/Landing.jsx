

export default function Landing() {
  return (
    <div id="landing">
      <div className="info-home">
        <p className="we">We'll build house of your dream</p>
        <p className="prag">
          We have 9000 more review and our customers trust on out property and
          quality products.
        </p>
              <div style={{ display: "flex",justifyContent:"center",flexWrap:"wrap"}}>
          <button className="btn-buy">Buy Now</button>
          <button className="btn-explore">Explore</button>
        </div>
      </div>
      <div className="img-home">
        <img src="Home.png" alt="home img" />
      </div>
    </div>
  );
}
