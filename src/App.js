import { Fragment } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Products from "./components/Products";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Fragment>
      <Header />
      <Hero />
      <About />
      <hr />
      <Products />
      <hr />
      <Contact />
      <hr />
      <Footer />
    </Fragment>
  );
}

export default App;
