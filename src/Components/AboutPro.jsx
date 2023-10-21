

export default function AboutPro() {
  return (
      <div className="aboutProperty" >
          <div style={{
              border: "none",
              width: "600px ",
              gap: "10px",
              textAlign: "start",
              justifyContent: "start",
              alignItems:"start"
          }}>
        <h2 style={{fontSize:"32px"}}>What we are offering?</h2>
        <p>Property facilities</p>
        <p className="product">
          We have more 5000 reviews and our customers trust on out quality
          product and trust own our product.
        </p>
      </div>
      <div>
        <i className="fa-solid fa-dumbbell"></i>
        <h2>Gym</h2>
      </div>
      <div>
        <i className="fa-solid fa-p"></i>
        <h2>Parking</h2>
      </div>
      <div style={{border:"none"}}>
        <i className="fa-regular fa-circle-right"></i>
      </div>
      <div>
        <i className="fa-solid fa-burger"></i>
        <h2>Local Dining</h2>
      </div>
      <div>
        <i className="fa-solid fa-person-swimming"></i>
        <h2>Swimming Pool</h2>
      </div>
      <div>
        <i className="fa-solid fa-wifi"></i>
        <h2>Internet</h2>
      </div>
    </div>
  );
}
