import "./App.css";
import axios from "axios";
import GuestRoute from "./features/GuestRoute";
import ProtectedRoute from "./features/ProtectedRoute";
import { useLayoutEffect, useState } from "react";
import { Navbar } from "./component/ui/Navbar";
import { LoginPage } from "./pages/authenticate/LoginPage";
import { useAuthStore } from "./store/useAuthStore";
import { RegisterPage } from "./pages/authenticate/RegisterPage";
import { Navigate, Route, Routes } from "react-router-dom";
import { GlobalModal } from "./component/layouts/GlobalModal";
import { TripInformation } from "./pages/TripInformation/TripInformation";
import { TripsProvider } from "./pages/TripsDashboard/TripsContext";
import { TripsDashboardPage } from "./pages/TripsDashboard/TripsDashboardPage";

function App() {
  const { setAuth, clearAuth } = useAuthStore();
  const [isInitializing, setIsInitializing] = useState(true);

  useLayoutEffect(() => {
    const checkActiveSession = async () => {
      try {
        const response = await axios.post(
          `http://localhost:3000/api/authenticate/refreshToken`,
          {},
          { withCredentials: true },
        );
        setAuth(response.data.accessToken, response.data.user);
      } catch (error) {
        console.log(error);
        clearAuth();
      } finally {
        setIsInitializing(false);
      }
    };

    checkActiveSession();
  }, []);

  if (isInitializing) {
    return <></>;
  }

  return (
    <>
      <Navbar />
      
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route element={<GuestRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route
            path="/trip-dashboard"
            element={
              <TripsProvider>
                <TripsDashboardPage />
              </TripsProvider>
            }
          />
          <Route path="/trip-information/:id" 
          element={<TripInformation/>}
          />
        </Route>
      </Routes>
      <GlobalModal />
    </>
  );
}

export default App;
