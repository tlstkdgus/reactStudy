import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";


function Quiz(){
    return(
        <Router>
            <Link to='/'>home</Link>
            <Link to='/products/2'>상품정보</Link> 
            <Link to='/products/3/notice'>상품공지사항</Link>
            <Link to='/cart'>카트</Link>
            <Link to='/users/coupon'>사용자쿠폰</Link>
            <Link to='/users/question'>질문</Link>
            <Link to='/users/notice'>공지</Link>
            
        </Router>
    )
}