import About from "./components/About";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import InstagramPosts from "./components/InstagramPosts";
import QuoteRow from "./components/QuoteRow";
import SelfCareRow from "./components/SelfCareRow";
import Services from "./components/Services";
import GlobalStyle from "./styles/global";
import { useRef } from "react";

function App() {
  const elementRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    posts: useRef(null),
    contact: useRef(null),
  };

  const scrollToElement = (elementRef) => {
    elementRefs[elementRef].current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Header scrollTo={scrollToElement}  />
      <Hero refs={elementRefs.home}/>
      <About refs={elementRefs.about} />
      <SelfCareRow />
      <Services refs={elementRefs.services} />
      <QuoteRow />
      <InstagramPosts refs={elementRefs.posts} />
      <ContactForm refs={elementRefs.contact} />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
