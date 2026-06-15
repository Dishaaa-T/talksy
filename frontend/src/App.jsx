import {Route, Routes} from 'react-router-dom';

import HomePage from "../pages/HomePage.jsx";
import LoginPage from "../pages/LoginPage.jsx";
import ChatPage from "../pages/ChatPage.jsx";
import CallPage from "../pages/CallPage.jsx";
import SignUpPage from "../pages/SignUpPage.jsx";
import NotificationsPage from "../pages/NotificationsPage.jsx";
import OnboardingPage from "../pages/OnboardingPage.jsx";

import toast,{Toaster} from "react-hot-toast";

const App = () => {
  
  return (
    <div className="h-screen" data-theme="night">
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/call" element={<CallPage />} />
        <Route path="/notifications" element={<NotificationsPage />} />
        <Route path="/onboarding" element={<OnboardingPage />} />
        
      </Routes>

      
    </div>
  );
};

export default App;

