import React from "react";

import "./store";
import Account from "./features/accounts/Account";
import Customer from "./features/customers/Customer";

export default function App() {
  return (
    <main>
      <header>
        <h1>The-react-redux-bank</h1>
      </header>
      <Customer />
      <Account />
    </main>
  );
}
