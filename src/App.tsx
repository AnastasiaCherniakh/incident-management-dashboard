import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ReportIncidentPage from './pages/ReportIncidentPage';

function App() {

  return (
    <BrowserRouter>

      <nav>
        <Link to="/">Dashboard</Link>
        {" | "}
        <Link to="/report">Report Incident</Link>
      </nav>

      <Routes>
        <Route path='/'element={<DashboardPage />}/>
        <Route path='/report'element={<ReportIncidentPage />}/>
      </Routes>
      
    </BrowserRouter>
  )

}

export default App
