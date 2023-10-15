import React, { useEffect} from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DashBoard from './components/DashBoard/Window';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './store/DataAction';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div className='cont'>
       <NavBar />
       <DashBoard />
    </div>
  ) : null ;
}

export default App;

/*

const App = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar />
  </React.StrictMode>
); 

export default App;
*/