import React from "react";
import Setup from "./utils/Setup";
import "react-toastify/dist/ReactToastify.css";
import {ToastContainer} from 'react-toastify';

function App() {
  return (
    <React.Fragment>
      <Setup/>
      <ToastContainer/>
    </React.Fragment>
  );
}

export default App;
