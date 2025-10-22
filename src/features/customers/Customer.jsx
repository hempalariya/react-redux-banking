import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./customerSlice";

export default function Customer() {
  const [fullName, setFullName] = useState("");
  const [nationalId, setNationalId] = useState("");

  // const customer = useSelector(store => store.customer)
  // console.log(customer)

  const dispatch = useDispatch();

  function handleCreateCustomer(e) {
    if(!fullName || !nationalId) return
    e.preventDefault();
    dispatch(createCustomer(fullName, nationalId));
  }

  return (
    <div className="customer">
      <div className="create-account">
        <h3>Create new account</h3>
        <form action="" onSubmit={handleCreateCustomer}>
          <input
            type="text"
            placeholder="full name"
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="national ID"
            onChange={(e) => {
              setNationalId(e.target.value);
            }}
          />
          <button>Create Account</button>
        </form>
      </div>
    </div>
  );
}
