import { Route,Routes } from 'react-router-dom';
import AllMeetupspage from './pages/AllMeetups';
import Favouritespage from './pages/Favourites';

import NewmeetupPage from './pages/Newmeetup';
import Layout from './components/layout/layout';


function App() {
  return (
    
    <Layout>
      
      <Routes>
      <Route path='/' element={<AllMeetupspage />}/>
      
      <Route path='/new-meetup' element={<NewmeetupPage />}/>
      <Route path='/Favouritespage' element={<Favouritespage />}/>
     
      </Routes>  
   
    </Layout>
  );
}

export default App;
