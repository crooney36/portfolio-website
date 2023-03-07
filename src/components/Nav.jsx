import { Anchor } from "antd";
import { Home, About, Projects, Experience, Contact } from "./index";
const Nav = () => (
  <>
    <div
      style={{
        padding: "20px",
        background: "#192734",
      }}
    >
      <Anchor
        direction="horizontal"
        style={{ color: "#fff" }}
        items={[
          {
            key: "Home",
            href: "#Home",
            title: "Home",
          },
          {
            key: "About",
            href: "#About",
            title: "About",
          },
          {
            key: "Projects",
            href: "#Projects",
            title: "Projects",
          },
          {
            key: "Experience",
            href: "#Experience",
            title: "Experience",
          },
          {
            key: "Contact",
            href: "#Contact",
            title: "Contact",
          },
        ]}
      />
    </div>
    <div>
      <div
        id="Home"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#192734",
        }}
      />
      <div
        id="About"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "rgba(0,120,255,0.02)",
        }}
      />
      <div
        id="Projects"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#FFFBE9",
        }}
      />
      <div
        id="Experience"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#F4EAD5",
        }}
      />
      <div
        id="Contact"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#DAE2B6",
        }}
      />
    </div>
    <div>
      <Home />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </div>
  </>
);
export default Nav;
