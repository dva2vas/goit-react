import css from "./css/Transactionhistory.module.css";

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className={css["transaction-history"]}>
        <thead>
            <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
            </tr>
        </thead>
        <tbody>
        {transactions.map((element, id)=>(
        <tr key={id}>
          <th>{element.type}</th> 
          <th>{element.amount}</th>
          <th>{element.currency}</th>
        </tr>
        ))}
        </tbody>
    </table>
 );
};  