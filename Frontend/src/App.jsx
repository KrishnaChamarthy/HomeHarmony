import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Upload from "./pages/Upload";
import Model from "./pages/Model";

const App = () => {
  return (
    <div className="overflow-x-hidden text-[#E6E6D9] antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-slate-950">
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#3e3e3e,transparent)]"></div>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/model" element={<Model />} />
      </Routes>
    </div>
  );
};

export default App;
