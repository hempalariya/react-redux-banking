import { combineReducers, createStore } from "redux";

const initialCustomerState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const accountInitialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

function customerReducer(state = initialCustomerState, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

function accountReducer(state = accountInitialState, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      if (state.loan > 0) return state;
      return {
        ...state,
        loan: action.payload.loanAmount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.loanAmount,
      };
    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };
    default:
      return state;
  }
}

// const store = createStore(accountReducer);

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);

// store.dispatch({type: 'account/deposit', payload: 500})

// console.log(store.getState())

// store.dispatch({type: 'account/withdraw', payload: 200})
// console.log(store.getState())

// store.dispatch({type: 'account/requestLoan', payload: {loanAmount: 300, loanPurpose: 'to buy a laptop'}})
// console.log(store.getState())

// store.dispatch({type: 'account/payloan'})
// console.log(store.getState())

//********* Action Creators **********/

//account action creators
function deposit(amount) {
  return { type: "account/deposit", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLoan(amount, purpose) {
  return {
    type: "account/requestLoan",
    payload: {
      loanAmount: amount,
      purpose: purpose,
    },
  };
}

function payLoan() {
  return { type: "account/payLoan" };
}

store.dispatch(deposit(500));
console.log(store.getState());

store.dispatch(withdraw(200));
console.log(store.getState());

store.dispatch(requestLoan(300, "to buy a laptop"));
console.log(store.getState());

store.dispatch(payLoan());
console.log(store.getState());

//customer action creators

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: {
      fullName,
      nationalId,
      createdAt: new Date().toISOString(),
    },
  };
}

function updateName(fullName) {
  return { type: "customer/updateName", payload: fullName };
}


store.dispatch(createCustomer('Hem Palariya', 'Ind'))

console.log(store.getState())

store.dispatch(updateName('Hem Chandra Palariya'))

console.log(store.getState())