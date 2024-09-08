import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HomePage from './home/HomePage';
import ItemListPage from './items/ItemListPage'
import NavMenu from './shared/NavMenu';

function App() {
  return (
    <Container>
      <NavMenu />
        <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/items" element={<ItemListPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    </Container>
  );
}

export default App;
