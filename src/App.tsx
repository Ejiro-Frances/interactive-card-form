import CardForm from "./components/cardform";
import CardBG from "./components/cardbg";
import Success from "./components/success";
import { useCardStore } from "./store/useCardStore";

function App() {
  const { isSubmitted } = useCardStore();

  return (
    <div className="flex flex-col md:flex-row">
      <CardBG />
      {isSubmitted ? <Success /> : <CardForm />}
    </div>
  );
}

export default App;
