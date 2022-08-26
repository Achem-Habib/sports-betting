import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import PrivateRoute from "../utils/PrivateRoute";
import PublicRoute from "../utils/PublicRoute";
import ClubMember from "./clubPages/ClubMember";
import ClubSignin from "./clubPages/ClubSignin";
import BetHistory from "./pages/BetHistory";
import Deposit from "./pages/Deposit";
import Example from "./pages/Example";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import MyAccount from "./pages/MyAccount";
import Navbar from "./pages/Navbar";
import Placebet from "./pages/Placebet";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import TransactionHistory from "./pages/TransactionHistory";
import Withdraw from "./pages/Withdraw";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Layout>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/signin"
              element={
                <PublicRoute>
                  <Signin />
                </PublicRoute>
              }
            />
            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <Signup />
                </PublicRoute>
              }
            />
            <Route
              path="/bet-history"
              element={
                <PrivateRoute>
                  <BetHistory />
                </PrivateRoute>
              }
            />
            <Route
              path="/myaccount"
              element={
                <PrivateRoute>
                  <MyAccount />
                </PrivateRoute>
              }
            />
            <Route
              path="/transaction"
              element={
                <PrivateRoute>
                  <TransactionHistory />
                </PrivateRoute>
              }
            />
            <Route
              path="/deposit"
              element={
                <PrivateRoute>
                  <Deposit />
                </PrivateRoute>
              }
            />
            <Route
              path="/withdraw"
              element={
                <PrivateRoute>
                  <Withdraw />
                </PrivateRoute>
              }
            />
            <Route
              path="/placebet"
              element={
                <PrivateRoute>
                  <Placebet />
                </PrivateRoute>
              }
            />
            <Route path="/club-signin" element={<ClubSignin />} />
            <Route path="/club-member" element={<ClubMember />} />
            <Route path="/example" element={<Example />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
