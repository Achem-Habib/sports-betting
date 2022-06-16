import { BrowserRouter, Route, Routes } from "react-router-dom";
import Deposit from "./pages/Deposit";
import Example from "./pages/Example";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Navbar from "./pages/Navbar";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Statement from "./pages/Statement";
import TransactionHistory from "./pages/TransactionHistory";
import Withdraw from "./pages/Withdraw";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/statement" element={<Statement />} />
          <Route path="/transaction" element={<TransactionHistory />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />

          <Route path="/example" element={<Example />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
