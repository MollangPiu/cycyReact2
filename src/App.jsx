import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

import Main from './page/Main';
import Calc from './page/Calc';
import Dark from './page/Dark';
import StudentInfo from './page/StudentInfo';

import Props건네주기 from './page/7일차_comp/자식건네주기';
import 게시판 from './page/7일차_comp/게시판';
import Axios1 from './page/axios/Axios보내기';


import 로그인 from './page/Login';
import 회원가입 from './page/Register';

import 게시판2 from './page/axios2/게시판';

import 광고 from './page/광고';
import Ref1 from './page/Ref';

import 리듀서 from './page/리듀서';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Main />} />
        <Route path={"/calc"} element={<Calc />} />
        <Route path={"/dark"} element={<Dark />} />
        <Route path={"/studentinfo"} element={<StudentInfo />} />
        <Route path={"/comp1"} element={<Props건네주기 />} />
        <Route path={"/board"} element={<게시판 />} />
        <Route path={"/axios1"} element={<Axios1 />} />

        <Route path={'/login'} element={<로그인 />} />
        <Route path={'/register'} element={<회원가입 />} />
        
        <Route path={'/board2'} element={<게시판2 />} />

        <Route path={'/wow'} element={<광고 />} />
        <Route path={"/ref1"} element={<Ref1 />}  />
        <Route path={"/reduce"} element={<리듀서 />} />
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
