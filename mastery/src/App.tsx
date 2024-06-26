import React from "react";

import "./categories.styles.scss";

import { Routes, Route } from "react-router-dom";

import Home from "./components/routes/home/home.component";
import Navigation from "./components/routes/navigation/navigation.component";
import SignIn from "./components/sign-in/sign-in.component";

const Shop = () => {
  return <h1>Shop page</h1>;
};
const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="sign-in" element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
