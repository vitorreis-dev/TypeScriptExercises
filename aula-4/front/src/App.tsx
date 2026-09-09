import InputDDD from "./components/InputDDD";
import Output from "./components/Output";
import { DDDProvider } from "./providers/DDDProvider";

export default function App() {
  return (
    <div id="container">
      <DDDProvider>
        <InputDDD />
        <Output />
      </DDDProvider>
    </div>
  );
}
