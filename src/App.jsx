import { useBalance } from "./context/BalanceContext";
import "./App.css";
import { useState } from "react";

export default function App() {
  const { state, dispatch } = useBalance();
  const [withdraw, setWithdraw] = useState(0);
  const [deposit, setDeposit] = useState(0);
  const { balance, isLoanTaken, isOpen } = state;
  return (
    <div className="App">
      <h2>State Bank of Pakistan</h2>
      <p>Balance : {balance}</p>
      <p>Loan : {isLoanTaken ? "Yes" : "No"}</p>
      <button onClick={() => dispatch({ type: "open" })}>Open Account</button>
      <input
        type="text"
        placeholder="Enter amount to deposit"
        value={deposit}
        onChange={(e) => setDeposit(Number(e.target.value))}
      />
      <button
        onClick={() => dispatch({ type: "add", payload: deposit || 150 })}
        disabled={!isOpen}
      >
        Deposit
      </button>
      <input
        type="text"
        placeholder="Enter amount to withdraw"
        value={withdraw}
        onChange={(e) => setWithdraw(Number(e.target.value))}
      />
      <button
        onClick={() => dispatch({ type: "withdraw", payload: withdraw || 50 })}
        disabled={!isOpen}
      >
        Withdraw 50 rs
      </button>
      <button onClick={() => dispatch({ type: "takeLoan" })} disabled={!isOpen}>
        Take Loan 5000
      </button>
      <button onClick={() => dispatch({ type: "payLoan" })} disabled={!isOpen}>
        Pay Loan
      </button>
      <button onClick={() => dispatch({ type: "close" })} disabled={!isOpen}>
        Close Account
      </button>
    </div>
  );
}
