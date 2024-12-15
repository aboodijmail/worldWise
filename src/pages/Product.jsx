import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
      <PageNav />

      <section>
        <img
          src="img-1.jpg"
          alt="person with dog overlooking mountain with sunset"
        />
        <div>
          <h2>About WorldWide.</h2>
          <p>
            WorldWise is an innovative app designed for explorers, dreamers, and
            travel enthusiasts who want to keep track of their global ambitions.
            With WorldWise, users can create a personalized list of countries
            they wish to visit and add specific details like travel dates, dream
            .
          </p>
          <p>
            The app encourages users to explore the world and build a tangible
            connection with their travel aspirations, transforming a wanderlust
            wishlist into a beautifully curated experience.
          </p>
        </div>
      </section>
    </main>
  );
}
