import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  const pageSize = 9;

  const [progress, setProgress] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("general");
  return (
    <div>
      <BrowserRouter>
        <Navbar setSearchQuery={setSearchQuery} setCategory={setCategory} />
        <LoadingBar
          color="#f11946"
          progress={progress}
          // onLoaderFinished={() => setProgress(0)}
        />
        <Routes>
          <Route
            path="/"
            element={
              <News
                setProgress={setProgress}
                key={category}
                pageSize={pageSize}
                country="in"
                category={category}
                searchQuery={searchQuery}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
