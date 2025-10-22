import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, withdraw, requestLoan, payLoan } from "./AccountSlice";

export default function Account() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawal, setWithdrawal] = useState("");
  const [loan, setLoan] = useState({
    amount: "",
    purpose: "",
  });

  const customerName = useSelector((store) => store.customer.fullName);

  const account = useSelector((store) => store.account);
  console.log(account);

  const dispatch = useDispatch();

  const handleDeposit = (e) => {
    e.preventDefault();
    if (!deposit) return;
    dispatch(deposit(Number(depositAmount)));
  };

  const haldleWithdraw = (e) => {
    e.preventDefault();
    if (!withdraw) return;
    dispatch(withdraw(Number(withdrawal)));
  };

  const handleReqLoan = (e) => {
    e.preventDefault();
    if (!loan.amount || !loan.purpose) return;
    dispatch(requestLoan(Number(loan.amount), loan.purpose));
  };

  const handlePayLoan = (e) => {
    e.preventDefault();
    dispatch(payLoan());
  };

  if (!customerName)
    return (
      <div className="no-user">
        <p>Please create an account</p>
      </div>
    );

  return (
    <div className="account">
      <div className="account-total"> ₹: {account.balance} </div>
      <div className="Account-header">
        <p>Welcome {customerName}</p>
        <h3>Your Account options</h3>
      </div>
      <div className="deposit">
        <h3>Deposit</h3>
        <form action="">
          <input
            type="text"
            placeholder="Deposit Amount"
            onChange={(e) => {
              setDepositAmount(e.target.value);
            }}
          />
          <button onClick={handleDeposit}>deposit</button>
        </form>
      </div>
      <div className="withdraw">
        <h3>Withdraw</h3>
        <form action="">
          <input type="text" placeholder="withdrawal Amount" onChange={(e) => {
            setWithdrawal(e.target.value)
          }}/>
          <button onClick={haldleWithdraw}>withdraw</button>
        </form>
      </div>
      <div className="loan">
        <h3>Request Loan</h3>
        <form action="">
          <input type="text" placeholder="Loan Amount" onChange={(e) => {
            setLoan(pre => {return {...pre, amount: e.target.value}})
          }}/>
          <input type="text" placeholder="Loan Purpose" onChange={(e) => {
            setLoan(pre => {return {...pre, amount: e.target.value}})
          }}/>
          <button onClick={handleReqLoan}>request</button>
        </form>
      </div>
      <div className="payloan">
        <h3>Pay Loan</h3>
        <form action="">
          <button onClick={handlePayLoan}>Pay Loan</button>
        </form>
      </div>
    </div>
  );
}
