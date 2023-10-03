import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
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
      <GlobalStyle />
    </>
  );
}

export default App;
