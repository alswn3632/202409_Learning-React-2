import './App.css'
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Comp1 from "./components/Comp1";
import Comp2 from "./components/Comp2";
import Comp3 from "./components/Comp3";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Param1 from './components/Param1';
import Param2 from './components/Param2';
import Param3 from './components/Param3';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/comp1' element={<Comp1 />}/>
            <Route path='/comp2' element={<Comp2 />}/>
            <Route path='/comp3' element={<Comp3 />}/>
            <Route path='/param/:id/:name' element={<Param1 />}/>
            <Route path='/param' element={<Param2 />}/>
            <Route path='/param3/:id/:pw' element={<Param3 />}/>
            {/* 변수가 두개인 param이라는 경로가 이미 존재하기 때문에, param3으로 변경해줘야함 
            뒤에 쓴 :id, :name, :pw는 사용자가 부여한것이지 실제로 인지하며 작동하는 것은 아니기 때문에. */}
          </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
