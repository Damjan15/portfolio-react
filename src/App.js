import { Box } from "@chakra-ui/layout";
import { Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Books from "./pages/Books.jsx";
import Home from "./pages/Home.jsx"
import Tools from "./pages/Tools.jsx";

function App() {
  return (
    <Box bg="gray.100">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/books" element={<Books />} />
      </Routes>

    </Box>
  );
}

export default App;
