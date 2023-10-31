import "./App.css";
import { Routes, Route } from "react-router-dom";
import Acceuil from "./pages/acceuil";
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
import Slider from "react-slick";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  let client = useRef(new QueryClient());
  return (
    <>
      <QueryClientProvider client={client.current}>
        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/dashboard" element={<Dashbord />} />
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
