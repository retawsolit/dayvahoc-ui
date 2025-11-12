import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Register from "../pages/Register";
import Users from "../pages/Users";
import ContentPage from "@/pages/Content";
import StatsPage from "@/pages/Stats";

import PublicLayout from "@/components/layouts/PublicLayout";
import AuthLayout from "@/components/layouts/AuthLayout";
import MainLayout from "@/components/layouts/MainLayout";
import PrivateRoute from "./PrivateRoute";
import SettingsPage from "@/pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />

      <Route
        path="/login"
        element={
          <AuthLayout>
            <Login />
          </AuthLayout>
        }
      />

      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <MainLayout>
              <Dashboard />
            </MainLayout>
          </PrivateRoute>
        }
      />

    <Route
    path="/register"
    element={
      <AuthLayout>
        <Register />
      </AuthLayout>
    }
  />
  <Route path="/users" element={<Users />} />
  <Route path="/content" element={<PrivateRoute><ContentPage /></PrivateRoute>} />

      <Route
        path="/stats"
        element={
          <PrivateRoute>
            <MainLayout>
              <StatsPage />
            </MainLayout>
          </PrivateRoute>
        }
      />

<Route
        path="/settings"
        element={
          <PrivateRoute>
            <MainLayout>
              <SettingsPage />
            </MainLayout>
          </PrivateRoute>
        }
      />

    </Routes>
  );
};

export default AppRoutes;
