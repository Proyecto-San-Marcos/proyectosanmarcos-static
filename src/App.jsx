import Navbar from "./components/Navbar";
import AppRoutes from "./router/routes";

const App = () => {
  return (
    <div className="w-screen">
      <div className="sticky top-0">
        <Navbar />
      </div>
      <AppRoutes />
    </div>
  );
};

export default App;
