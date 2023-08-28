import Header from "./Header";
import Mains from "./Mains";

export default function App() {
  return (
    <div className="app">
      <Header />

      <Mains>
        <p>1/15</p>
        <p>Question?</p>
      </Mains>
    </div>
  );
}
