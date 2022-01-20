import { Main } from "./components/Main";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

function App() {
  return (
      <Main />
  );
}

export default App;
