import { Routes,Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Work from './pages/Work/Work.js';
import Error from './pages/Errors/Error.js';
import Layout from './pages/Layout/Layout.js';
function App() {
  return (
    <div className="App">
      <Routes >
        <Route path='/' element={<Layout/>}>
          <Route path='/about' element={<About/>}/>
          <Route index element={<Home/>}/>
          <Route path='/work' element={<Work/>}/>
          <Route path='*' element={<Error/>}/>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
