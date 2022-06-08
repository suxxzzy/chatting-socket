import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignupLogin from "./pages/SignupLogin";
import Chatrooms from "./pages/Chatrooms";
import SearchOpen from "./pages/SearchOpen";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="userauth" element={<SignupLogin />} />
          <Route index element={<Chatrooms />} />
          <Route path="searchopen" element={<SearchOpen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
