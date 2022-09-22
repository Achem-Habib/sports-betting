import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import PrivateClubRoute from "../utils/PrivateClubRoute";
import PrivateRoute from "../utils/PrivateRoute";
import PrivateUserRoute from "../utils/PrivateUserRoute";
import PublicRoute from "../utils/PublicRoute";
import BetHistory from "./pages/BetHistory";
import ChangeClub from "./pages/ChangeClub";
import ChangePassword from "./pages/ChangePassword";
import ClubHistory from "./pages/ClubHistory";
import ClubMember from "./pages/ClubMember";
import Deposit from "./pages/Deposit";
import DepositHistory from "./pages/DepositHistory";
import Example from "./pages/Example";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Navbar from "./pages/Navbar";
import Placebet from "./pages/Placebet";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Withdraw from "./pages/Withdraw";
import WithdrawHistory from "./pages/WithdrawHistory";

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
                <PrivateUserRoute>
                  <BetHistory />
                </PrivateUserRoute>
              }
            />
            <Route
              path="/deposit-history"
              element={
                <PrivateUserRoute>
                  <DepositHistory />
                </PrivateUserRoute>
              }
            />
            <Route
              path="/withdraw-history"
              element={
                <PrivateRoute>
                  <WithdrawHistory />
                </PrivateRoute>
              }
            />
            <Route
              path="/deposit"
              element={
                <PrivateUserRoute>
                  <Deposit />
                </PrivateUserRoute>
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
              path="/change-club"
              element={
                <PrivateUserRoute>
                  <ChangeClub />
                </PrivateUserRoute>
              }
            />

            <Route
              path="/change-password"
              element={
                <PrivateRoute>
                  <ChangePassword />
                </PrivateRoute>
              }
            />

            <Route
              path="/placebet"
              element={
                <PrivateUserRoute>
                  <Placebet />
                </PrivateUserRoute>
              }
            />

            <Route
              path="/club-member"
              element={
                <PrivateClubRoute>
                  <ClubMember />
                </PrivateClubRoute>
              }
            />
            <Route
              path="/club-history"
              element={
                <PrivateClubRoute>
                  <ClubHistory />
                </PrivateClubRoute>
              }
            />
            <Route path="/example" element={<Example />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
