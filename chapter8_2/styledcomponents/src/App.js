import {createGlobalStyle, styled, css} from 'styled-components'
import { Example } from './components/Example';
import {reset} from 'styled-reset';


// const GlobalStyle = createGlobalStyle`
// ${reset}
// span{
//   color: red;
//   font-size: 12px;
// }`

/*const name = '이호준'
const age = 10

function 인사(문구, 이름, 나이){
    // console.log(문구)
    console.log(문구, 이름, 나이)
    return `${문구[0]}${이름}${문구[1]}${나이+나이}${문구[2]}`
}

const 인사문구 = 인사`이름은 ${name}이고 나이는 ${age+age}입니다.`

console.log(인사문구)*/

const ContentDiv = styled.div `padding : 30px;`

const ContentH3 = styled.h3`
  color: ${(props) => props.name === 'hello'? 'hotpink' : 'seagreen'};
  font-size: 20px;
  text-align:center;
`;

const ContentExtends = styled(ContentH3)`
border: 3px solid black;`

const One = css`
color:hotpink;`

const Two = css`
border: 1px solid black;`

const Three = styled.strong`
${One}
${Two};`

function App() {
  return (
    <ContentDiv>
      <ContentExtends> 확장 스타일입니다.</ContentExtends>
      <Three>또다른 확장 스타일입니다!</Three>
      <h1>hello world</h1>
      <ContentH3 name = 'hello'>i am h3 with styled components </ContentH3>
      <span>hello world with span</span>
      <Example/>
    </ContentDiv>
  );
}
export default App;
