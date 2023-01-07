
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TodoUser from './AfterloginComp/home';
import './App.css';
import LoginComp from './loginComponent/login';
import Register_comp from './regComponent/regster';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginComp/>}/>
          <Route path='/' element={<Register_comp/>}/>
          <Route path='/SuccessLogin' element={<TodoUser/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
