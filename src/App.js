import { Box } from "@chakra-ui/layout";
import { Routes, Route, Link } from "react-router-dom"
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx"

function App() {
  return (
    <Box bg="gray.100" h="100vh">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Box>
  );
}

export default App;
