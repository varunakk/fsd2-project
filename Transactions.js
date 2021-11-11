import transactions from "./assets/Transactions.json";
import store from "./store";

function Transactions(){

    // us state to store the login user 

    //const p= store.getState().user;
    console.log(store.getState());
    console.log("mm");

// here i'm not able to get the user from store , oonce user  logins in it should be in store for further access

    return (<>
    <h1>Transactions</h1>
    <h2>{store.getState()}</h2>
    {transactions.filter( hom => hom.acc==="123"  ).map(x => <h1>{x.acc}, {x.amount}</h1>)}

    </>)
    }
    export default Transactions;