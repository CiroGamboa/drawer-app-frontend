import { Routes, Route, Link } from 'react-router-dom';
import CreateDraw from './components/CreateDraw';
import Home from './components/Home';
import Header from './components/Header';
import DrawCanvas from './components/DrawCanvas';

const App = () => {
  return (
    <>
      <Header/>

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="new" element={<DrawCanvas />} />
        <Route path="home/draws/:id" element={<DrawCanvas />} />
      </Routes>
    </>
  );
};


export default App;