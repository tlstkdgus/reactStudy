import './App.css';
import Hello from './components/Hello';
import Time from './components/Time';
import HelloProps from './components/Props'
import Resume from './components/Resume';

function App(){

  return(
    <div>
      <Hello name='gary'/>
      <Time/>
      <Resume hello = '안녕하세요' name = '개리' hobby = '게임' food = '고기' color = 'blue'/>
      {/* <HelloProps name='jaehyun' 
      age = {25}
      someFunc ={() => 'awesome!!!'}
      someJSX={<img src='https://picsum.photos/id/237/200/300'/>}
      someArr={[1,2,3]}
      someObj = {{one:1}}/> */}
    </div>
  )
}
export default App;
