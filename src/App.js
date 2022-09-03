import TopBar from './components/topbar/TopBar';
import CreateListing from './screens/create-listing/CreateListing';
import Home from './screens/home/Home';
import Detail from './screens/listingdetail/Detail';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <TopBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail/:id' element={<Detail />} />
          <Route exact path='/create' element={<CreateListing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
