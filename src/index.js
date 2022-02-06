import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import CV from './pages/CV/CV';
import NoPage from './pages/NoPage/NoPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Home />} />
          <Route path='/projets' element={<Projects />} />
          <Route path='/curriculum-vitae' element={<CV />} />
          <Route path='*' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

ReactDOM.render(<Routing />, document.getElementById('root'));
