import { useBalance } from "./context/BalanceContext";
import "./App.css";

export default function App() {
  const { state, dispatch } = useBalance(); // Move the hook inside the functional component
  return (
    <div className="App">
      <h2>State Bank of Pakistan</h2>
      <p>Balance : {state.balance}</p>
      <p>Loan : {state.isLoanTaken ? "Yes" : "No"}</p>
      <button onClick={() => dispatch({ type: "open" })}>Open Account</button>
      <button
        onClick={() => dispatch({ type: "add", payload: 150 })}
        disabled={!state.isOpen}
      >
        Add 150 rs
      </button>
      <button
        onClick={() => dispatch({ type: "withdraw", payload: 50 })}
        disabled={!state.isOpen}
      >
        Withdraw 50 rs
      </button>
      <button
        onClick={() => dispatch({ type: "takeLoan" })}
        disabled={!state.isOpen}
      >
        Take Loan 5000
      </button>
      <button
        onClick={() => dispatch({ type: "payLoan" })}
        disabled={!state.isOpen}
      >
        Pay Loan
      </button>
      <button
        onClick={() => dispatch({ type: "close" })}
        disabled={!state.isOpen}
      >
        Close Account
      </button>
    </div>
  );
}
