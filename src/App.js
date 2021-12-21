import { Route,Routes } from 'react-router-dom';
import AllMeetupspage from './pages/AllMeetups';
import Favouritespage from './pages/Favourites';

import NewmeetupPage from './pages/Newmeetup';
import Mainnavigationcomponent from './components/layout/Mainnavigationcomponent';

function App() {
  return (
    
    <div>
      <Mainnavigationcomponent/>
      <Routes>
      <Route path='/' element={<AllMeetupspage />}/>
      
      <Route path='/new-meetup' element={<NewmeetupPage />}/>
      <Route path='/Favouritespage' element={<Favouritespage />}/>
     
      </Routes>  
   
    </div>
  );
}

export default App;
