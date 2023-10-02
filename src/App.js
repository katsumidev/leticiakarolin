import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuoteRow from "./components/QuoteRow";
import GlobalStyle from "./styles/global";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <QuoteRow />
      <About />
      <GlobalStyle />
    </>
  );
}

export default App;
