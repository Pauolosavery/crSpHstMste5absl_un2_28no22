/* eslint-disable import/no-named-as-default */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable no-unused-vars */
import { useDispatch, useSelector } from "react-redux";

import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar.jsx";

// import { fetchGetUser } from "../redux/thunk/thunk";

function App() {
  const { user } = useSelector((state) => state.user);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/account" element={<NavBar />} />
          <Route path="/account" element={<Home />} />
          <Route path="/account" element={<About />} />
          <Route path="/account" element={<Portfolio />} />
          <Route path="/account" element={<Skill />} />
          <Route path="/account" element={<Services />} />
          <Route path="/account" element={<Education />} />
          <Route path="/account" element={<Achievements />} />
          <Route path="/account" element={<SocialNetwork />} />
          <Route path="/account" element={<Contacts />} />
          <Route path="/account" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
