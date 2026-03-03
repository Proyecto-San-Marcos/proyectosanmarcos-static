import Navbar from "./components/Navbar";
import WhatsAppFAB from "./components/WhatsAppFAB";
import AppRoutes from "./router/routes";

const App = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <AppRoutes />
      <WhatsAppFAB />
    </div>
  );
};

export default App;