import { useColorModeValue } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx"
import Projects from "./pages/Projects.jsx";
import Tools from "./pages/Tools.jsx";

function App() {
  const bg = useColorModeValue("gray.100", "#1a202c")
  return (
    <Box bg={bg}>
      <Navbar />
      <Home />
      <About />
      <Tools />
      <Projects />
    </Box>
  );
}

export default App;
