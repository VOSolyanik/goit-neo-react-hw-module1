import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.tableHead}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transactions) => {
          return (
            <tr key={transactions.id} className={css.tableRow}>
              <td>{transactions.type}</td>
              <td>{transactions.amount}</td>
              <td>{transactions.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}