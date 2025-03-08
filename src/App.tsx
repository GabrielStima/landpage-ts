import "./assets/css/index.css";
import appStyle from "./assets/css/App.module.css";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";

export const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <section className={appStyle.sectionOne}>
          <h1>
            Noona Digital Cashier <br /> Monitor Outlet Revenue Receipts
          </h1>
          <p>
            we developed an innovative and efficient point-of-sale (POS)
            application specifically designed for the Indonesian MSME market.
          </p>
        </section>
      </main>
      <Footer />
    </>
  );
};
