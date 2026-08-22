import Navbar from "./components/Navbar";
import WhatsAppFAB from "./components/WhatsAppFAB";
import ScrollToTop from "./components/ScrollToTop";
import AppRoutes from "./router/routes";

const App = () => {
  return (
    <div className="w-screen">
      <ScrollToTop />
      <Navbar />
      <AppRoutes />
      <WhatsAppFAB />
    </div>
  );
};

export default App;
