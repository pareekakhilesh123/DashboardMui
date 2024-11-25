
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './Pages/Home';
import Teacher from './Pages/Teacher';
import Student from './Pages/Student';


function App() {
  return (
    <div className="App">

   <BrowserRouter>
    <Routes>
      <Route path='/' exact element={<Home />}></Route>
      <Route path='/teacher' exact element={<Teacher />}></Route>
      <Route path='/student' exact element={<Student />}></Route>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
