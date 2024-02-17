import { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";

const BalanceContext = createContext();

const initialState = {
  isOpen: false,
  balance: 500,
  isLoanTaken: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "deposit":
      return { ...state, balance: state.balance + action.payload };
    case "withdraw":
      return {
        ...state,
        balance: state.balance > 0 ? state.balance - action.payload : 0,
      };
    case "open":
      return {
        ...state,
        isOpen: true,
      };
    case "add":
      return {
        ...state,
        balance: state.balance + action.payload,
      };
    case "takeLoan":
      return {
        ...state,
        balance: !state.isLoanTaken ? state.balance + 5000 : state.balance,
        isLoanTaken: !state.isLoanTaken ? true : state.isLoanTaken,
      };
    case "payLoan":
      return {
        ...state,
        balance:
          state.balance >= 5000 && state.isLoanTaken
            ? state.balance - 5000
            : state.balance,
        isLoanTaken:
          state.balance >= 5000 && state.isLoanTaken
            ? false
            : state.isLoanTaken,
      };
    case "close":
      if (state.balance > 0 || state.balance < 0 || state.isLoanTaken) {
        return state;
      } else {
        return {
          ...state,
          isOpen: false,
        };
      }
    default:
      return state;
  }
}

function BalanceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BalanceContext.Provider value={{ state, dispatch }}>
      {children}
    </BalanceContext.Provider>
  );
}

BalanceProvider.propTypes = {
  children: PropTypes.node,
};

function useBalance() {
  const context = useContext(BalanceContext);
  if (context === undefined) {
    throw new Error("useBalance must be used within a BalanceProvider");
  }
  return context;
}

export { BalanceProvider, useBalance };
