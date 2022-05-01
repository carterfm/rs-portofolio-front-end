import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header.js';
import BioPage from './pages/BioPage.js';
import './styles/App.css';

// TODO: change the react router setup
function App() {
  return (
    <section>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<BioPage/>}/>
        </Routes>
      </Router>
    </section>
  );
}

export default App;
