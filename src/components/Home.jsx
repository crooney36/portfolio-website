import React from "react";

const Home = () => {
  return (
    <div
      id="Home"
      style={{
        width: "100vw",
        height: "100vh",
        textAlign: "center",
        background: "#192734",
      }}
    >
      <h1>Welcome to my website!</h1>
      <p>This is the home page.</p>
      <div id="image-container">
        <img src={"../assets/images/1.jpeg"} alt="1" />
        <img src={"../assets/images/2.jpeg"} alt="2" />
        <img src={"../assets/images/3.jpeg"} alt="3" />
        <img src={"../assets/images/4.jpeg"} alt="4" />
        <img src={"../assets/images/5.jpeg"} alt="5" />
        <img src={"../assets/images/6.jpeg"} alt="6" />
      </div>
    </div>
  );
};

export default Home;
