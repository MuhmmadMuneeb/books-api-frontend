import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Root from "./components/layout/Root";
import Home from "./components/Home";
import Details from "./components/Details";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Books from "./components/Books";
import About from "./components/About";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminTheme from "./components/Admin";

const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Root />}>
          {/* Public Routes */}
          <Route path="signup" element={<Signup />} />
          <Route path="login" element={<Login />} />

          {/* Protected Routes */}
          <Route
            index
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="books"
            element={
              <ProtectedRoute>
                <Books />
              </ProtectedRoute>
            }
          />
          <Route
            path="about"
            element={
              <ProtectedRoute>
                <About />
              </ProtectedRoute>
            }
          />
          <Route
            path="book/:id"
            element={
              <ProtectedRoute>
                <Details />
              </ProtectedRoute>
            }
          />
          <Route
            path="admin"
            element={
              <ProtectedRoute>
                <AdminTheme />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </Fragment>
  );
};

export default App;