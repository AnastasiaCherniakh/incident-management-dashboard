import './App.css'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import DashboardPage from './pages/DashboardPage';
import ReportIncidentPage from './pages/ReportIncidentPage';

function App() {

  return (
    <BrowserRouter>

      <div className="app-container">

        <nav className='navbar'>
          <Link to="/">Dashboard</Link>
          <Link to="/report">Report Incident</Link>
        </nav>

        <main className='main-content'>
          <Routes>
            <Route path='/'element={<DashboardPage />}/>
            <Route path='/report'element={<ReportIncidentPage />}/>
          </Routes>
        </main>

      </div>
      
    </BrowserRouter>
  )

}

export default App
