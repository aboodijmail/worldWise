import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />

      <section>
        <h1>
          You travel the world.
          <br />
          WorldWise keeps track of your adventures.
        </h1>
        <h2>
          As a junior developer, I challenged myself to build WorldWise, a web
          app simulating the complexity of large-scale projects. It helps users
          organize travel goals while pushing me to tackle advanced concepts
          like state management, responsive design, and scalable
          architecture—bridging the gap between beginner and professional
          development.
        </h2>
        <Link to="/login" className="cta">
          Start tracking now
        </Link>
      </section>
    </main>
  );
}
