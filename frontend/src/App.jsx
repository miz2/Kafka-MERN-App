import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Signin } from './pages/SignIn';
import { Signup } from './pages/Signup';
import { Dashboard } from './pages/Dashboard';
import CreateRuleForm from './pages/CreateRuleForm';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-rule" element={<CreateRuleForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
