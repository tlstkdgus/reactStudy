import './App.css';

function App(){
  const name = '라이캣!';
  const someStyle = {backgroundColor:'black', color:'white'};
  const today= new Date();
  const year = today.getFullYear();
  const month = today.getMonth()+1;
  const date = today.getDate();
  const hour = today.getHours();
  const minute = today.getMinutes();
  const seconds = today.getSeconds();
  // 여기는 js할 때와 똑같이 주석을 입력합니다! 왜냐면 여기는 JS의 영역이니깐요 :)
  return(
    <div>
    /** 여기서부터는 jsx! 주석은 이런식으로 작성합니다. 한줄 주석은 따로 존재하지 않습니다. */
      <div>
        <h1 style = {someStyle}>안녕, {name} 1호!</h1>
        <h1>안녕, 라이캣 2호!</h1>
        <div className = 'newClass'/>
      </div>
      <div style = {someStyle}>
        <h1 style = {{color:'red'}}>년: {year}</h1>
        <h1>월/일: {month}/{date}</h1>
        <h1>시간: {hour}시 {minute}분 {seconds}초</h1>
      </div>
    </div>
  )
}
export default App;
