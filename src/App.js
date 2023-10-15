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

function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <SelfCareRow />
      <Services />
      <QuoteRow />
      <InstagramPosts />
      <ContactForm />
      <Footer />
      <GlobalStyle />
    </>
  );
}

export default App;
