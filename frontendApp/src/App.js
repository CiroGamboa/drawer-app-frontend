import { Routes, Route, Link } from 'react-router-dom';
import CreateDraw from './components/CreateDraw';
import Home from './components/Home';

const App = () => {
  return (
    <>
      <h1>Metaculus Free Hand App</h1>

      <Navigation />

      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="new" element={<CreateDraw />} />
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