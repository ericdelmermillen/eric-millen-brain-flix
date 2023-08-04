import "./App.scss";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from "./components/Header/Header";
import Home from "./Pages/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import VideoUpload from "./Pages/VideoUpload/VideoUpload";

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} /> 
          <Route path="/videos/:id" element={<Home />}/>
          <Route path="/upload" element={<VideoUpload />}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
        </BrowserRouter>
    </>
  )};

export default App;