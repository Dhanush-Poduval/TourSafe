import { Routes ,Route} from "react-router-dom";
import ButtonGradient from "./assets/svg/ButtonGradient";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Roadmap from "./components/Roadmap";
import Services from "./components/Services";
import Dashboard from "./pages/Dahboard";
import DashboardLayout from "./layouts/DashboardLayout";
import { Login } from "./login/Login";
import Signup from "./login/Signup";


const App = () => {
  return (
 
      <Routes>
        <Route path="/" element={ <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden bg-n-8 text-n-1">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Roadmap />
        <Footer />
      </div>

      <ButtonGradient />
    </>} />
     
      
      {/* Dashboard routes wrapped with layout */}
      <Route
        path="/dashboard/*"
        element={
         
              <DashboardLayout>
            
            <Dashboard />
          </DashboardLayout>
        }
      />
      <Route 
        path="/login"
        element={
          <div className="">
             <Login />

          </div>
          
        }
      />
        
      <Route 
        path="/signup"
        element={
          <div className="">
             <Signup/>

          </div>
          
        }
      />

      
      </Routes>
   
   
  );
};

export default App;
