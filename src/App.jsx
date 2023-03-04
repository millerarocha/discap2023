import { BrowserRouter as Router, HashRouter, Routes, Route } from 'react-router-dom';
import Admin from './Routes/Admin';
import Main from './Routes/Main';
import MainNews from './Routes/Main/MainNews';
import MainJobs from './Routes/Main/MainJobs';
import NotFound from './Routes/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/discap2023/' element={<Main />} />
        <Route path='/noticias' element={<MainNews />} />
        <Route path='/empleos' element={<MainJobs />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
