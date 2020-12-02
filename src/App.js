import Footer from "./components/Footer";
import Projects from "./components/Projects";

const { default: Header } = require("./components/Header");
const { default: Summary } = require("./components/Summary");

function App() {
  return (
    <>
      <Header />
      <Summary />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
