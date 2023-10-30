import "./App.css";
import { Routes, Route } from "react-router-dom";
import Acceuil from "./pages/Acceuil";
import Dashbord from "./pages/Dashbord";
import Contact from "./pages/Contact";
import Connexion from "./pages/Connexion";
import Inscription from "./pages/Inscription";
import Reports from "./pages/Reports";
import Profile from "./pages/Profile";
import Verification from "./pages/Verification";
import FormInscription from "./pages/FormInscription";
import Broadcasts from "./pages/Broadcasts";
import MessageComponant from "./pages/MessageComponant";
import WorkSpace from "./pages/WorkSpace";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useRef } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";

function App() {
 let client = useRef( new QueryClient());
  return (
    <>
    <QueryClientProvider client={client.current}> 
    <ToastContainer  
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light" />
      <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/broadcasts" element={<Broadcasts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/message" element={<MessageComponant />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workspace" element={<WorkSpace />} />
          <Route path="/verification" element={<Verification />} />
          <Route path="/formulaire" element={<FormInscription />} /> 
        </Routes>
    </QueryClientProvider>
    
    </>
  );
}

export default App;
