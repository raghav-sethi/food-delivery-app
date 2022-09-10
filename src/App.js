import Navbar from "./components/Header/Navbar";
import RestrauntsList from "./components/Restraunts/RestrauntsList";
// import Modal from "./components/UI/Modal";

function App() {
  return (
    <div>
      <Navbar />
      <RestrauntsList mealType="Breakfast" city="Mumbai" />
      {/* <Modal /> */}
    </div>
  );
}

export default App;
