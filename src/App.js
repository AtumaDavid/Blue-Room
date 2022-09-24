import React from "react";
import Payment from "./components/payments/Payment";
import Success from "./components/success/Success";
import Error from "./components/error/Error";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Payment />} />
        <Route path="success" element={<Success />} />
        <Route path="error" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;
