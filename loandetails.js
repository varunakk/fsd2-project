import loans from "./assets/loan.json";
import './Loan.css';

function Loandetai(){
    return(<div class="loandet">

        <h1>Your Loan</h1>
        {loans.filter( y => y.acc==="123"  ).map(x => <h1>accno: {x.acc}<br/>loan_amount: {x.loan_amount}<br/>interest:{x.interest}<br/>timeperiod:{x.no_of_months}<br/>amount to be payed:{x.amount_to_be_payed}</h1>)}
    </div>
    
    )
}
export default Loandetai;
