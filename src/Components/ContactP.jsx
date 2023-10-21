
export default function ContactP() {
  return (
      <div style={{
          marginTop: "150px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection:"column",
          gap:"15px"
    }}>
      <h1 style={{fontSize:"35px",textAlign:"center"}}>Interesting to buy property</h1>
      <p style={{width:"40%",opacity:"0.7",textAlign:"center"}}>
        If you are interested to buy the property contact us we will call you.
        Shortly to fulfill you requirements and property.
          </p>
          <input className="input" type="email" placeholder="Enter your e-mail address" style={{marginTop:"20px"}} />
          <input className="input" type="text" placeholder="Enter your Phone" />
          <button className="send" style={{width:"30%"}}>Send</button>
    </div>
  );
}
