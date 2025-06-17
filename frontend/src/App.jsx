// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin } from './pages/SignIn';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import CreateRuleForm from './pages/CreateRuleForm';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes without navbar */}
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />

        {/* Routes with navbar */}
        <Route
          path="/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/create-rule"
          element={
            <Layout>
              <CreateRuleForm />
            </Layout>
          }
        />

        {/* Optional: Redirect root to /signin */}
        <Route path="/" element={<Signin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
