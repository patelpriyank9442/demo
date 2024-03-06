import React from "react";
import SignIn from "./components/Login/SignIn";
import { ToastContainer } from "react-toastify";
import MainRoute from "./routes";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <MainRoute />
    </React.Fragment>
  );
};

export default App;
