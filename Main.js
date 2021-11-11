import {BrowserRouter as Router ,Link,Switch, Route} from "react-router-dom";

function Main(){
    return (<>
    <h1>IIITS Bank</h1>
    <h2>Main page</h2>
    <Link to="/Main/Transactions"> Transactions </Link><br/>
    <Link to="/Main/SendMoney"> Send Money </Link>
    
    </>)
    }
    export default Main;