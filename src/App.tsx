import CardForm from "./components/cardform";
import CardBG from "./components/cardbg";
import Success from "./components/success";
import { useCardStore } from "./store/useCardStore";

function App() {
  const { isSubmitted } = useCardStore();

  return (
    <div className="grid lg:grid-cols-[20fr_60fr]">
      <CardBG />
      {isSubmitted ? <Success /> : <CardForm />}
    </div>
  );
}

export default App;
