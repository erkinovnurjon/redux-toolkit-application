import {Route , Routes} from "react-router-dom"
import {Main , Login , Register } from "./components"
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App ">
      <Navbar />
     <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
     </Routes>
     
    </div>
  );
}

export default App;
