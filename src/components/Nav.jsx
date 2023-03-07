import { Anchor } from "antd";
import { Home, About, Projects, Experience, Contact } from "./index";
const Nav = () => (
  <>
    <div
      style={{
        padding: "20px",
        background: "#255",
      }}
    >
      <Anchor
        direction="horizontal"
        style={{ color: "fff" }}
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
      >
        <Home />
      </div>
      <div
        id="About"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#192734",
        }}
      >
        <About />
      </div>
      <div
        id="Projects"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#FFFBE9",
        }}
      >
        <Projects />
      </div>
      <div
        id="Experience"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#F4EAD5",
        }}
      >
        <Experience />
      </div>
      <div
        id="Contact"
        style={{
          width: "100vw",
          height: "100vh",
          textAlign: "center",
          background: "#DAE2B6",
        }}
      >
        <Contact />
      </div>
    </div>
  </>
);
export default Nav;
