import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import OverView from "./pages/OverView";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
       <Route path="/OverView" element={<OverView/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
