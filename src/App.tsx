import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import Home from "./design-system/Pages/Home";
import Playground from "./design-system/Pages/Playground";
import Results from "./design-system/Pages/Results";
import { submitResult } from "./redux/questionsSlice";

const App: React.FC = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const results = localStorage.getItem("results");
      if (results) {
        dispatch(submitResult(JSON.parse(results)));
      }
    } catch (error: any | unknown) {
      throw error;
    }
  });
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/playground" element={<Playground />} />
      <Route path="/results" element={<Results />} />
    </Routes>
  );
};

export default App;
