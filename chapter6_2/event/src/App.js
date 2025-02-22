import {useState} from 'react';
import { HomePage } from './components/HomePage';
import { Login } from './components/Login';

function App() {

  const user = {
    idUser: 'jaehyun@weniv.com',
    pwUser: '1234'
  }

  const [login, setLogin] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return(
    <>
      {login ? <HomePage/> : <Login infoUser={user} setLogin={setLogin}/>}
      {modalShow && <Modal/>}
    </>
  )
  
}
export default App;
