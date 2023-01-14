
import 'aos/dist/aos.css';
import Home from './screen/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
 import './scss/styl.scss';
import PopularMovie from './screen/Popular';
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Top from './screen/Top';
import MovieDetail from './screen/MovieDetail';
import LatestMovie from './screen/Latest';
import Person from './screen/Person';
import PersonDetail from './screen/PersonDetail';

function App() {
  return (
<BrowserRouter>
<Routes>
<Route path = '/' element = {<Home/>}/>
  <Route path  = '/popular' element = {<PopularMovie/>}/>
  <Route path = '/top' element = {<Top/>}/>
  <Route path='/detail/:id' element = {<MovieDetail/>}/>
  <Route path = '/latest' element = {<LatestMovie/>}/>
  <Route path = '/person' element = {<Person/>}/>
  <Route path = '/persondetail/:id' element = {<PersonDetail/>}/>
</Routes>
</BrowserRouter>
  );
}

export default App;
