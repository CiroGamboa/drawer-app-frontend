import { Routes, Route, Link } from 'react-router-dom';
import CreateDraw from './components/CreateDraw';
import Home from './components/Home';
import Header from './components/Header';
import EditDraw from './components/EditDraw';
import DrawCanvas from './components/DrawCanvas';

const App = () => {
  return (
    <>
      <Header/>

      <Navigation />

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="new" element={<CreateDraw />} />
        <Route path="home/draws/:id" element={<DrawCanvas />} />
      </Routes>
    </>
  );
};

const Navigation = () => {
  return (
    <nav
      style={{
        borderBottom: 'solid 1px',
        paddingBottom: '1rem',
      }}
    >
      <Link to="/home">Home</Link>
      <Link to="/new">New Draw</Link>
    </nav>
  );
};

export default App;