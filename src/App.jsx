import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './Routes/Admin';
import Main from './Routes/Main';
import MainNews from './Routes/Main/MainNews';
import MainJobs from './Routes/Main/MainJobs';
import NotFound from './Routes/NotFound';
import Login from './Routes/Admin/Login';
import NewsEditor from './Routes/Admin/Dashboard/NewsEditor';
import JobsEditor from './Routes/Admin/Dashboard/JobsEditor';
import SpecialDateEditor from './Routes/Admin/Dashboard/SpecialDateEditor';
import DetailNew from './Routes/Main/MainNews/DetailNew/DetailNew';
import DetailJob from './Routes/Main/MainJobs/DetailJob/DetailJob';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/noticias' element={<MainNews />} />
        <Route path='/noticia/:id' element={<DetailNew />} />
        <Route path='/empleos' element={<MainJobs />} />
        <Route path='/empleo/:id' element={<DetailJob />} />
        <Route
          path='/admin/news'
          element={<Admin section={<NewsEditor />} />}
        />
        <Route
          path='/admin/jobs'
          element={<Admin section={<JobsEditor />} />}
        />
        <Route
          path='/admin/special-date'
          element={<Admin section={<SpecialDateEditor />} />}
        />
        <Route path='/login' element={<Login />} />
        <Route path='/admin' element={<Login />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
