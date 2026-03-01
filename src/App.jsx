import Navbar from "./components/Navbar";
import AppRoutes from "./router/routes";

const App = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <AppRoutes />
    </div>
  );
};

export default App;