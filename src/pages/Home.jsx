import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
        <main className="flex-1 px-4 py-8">
          <section className="mb-8"></section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Our Services</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur. Morbi neque ex, condimentum dapibus congue et,
              vulputate ut ligula.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros
              quis consectetur. Morbi neque ex, condimentum dapibus congue et,
              vulputate ut ligula.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
