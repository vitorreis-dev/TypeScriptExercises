import "./App.css"
import { useState } from "react";
import Output from "./components/Output";
import Input from "./components/Input";

export default function App() {

  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <>
    <Input red = {red} green = {green} blue = {blue} setRed = {setRed} setGreen = {setGreen} setBlue = {setBlue} />
    <Output r={red} g={green} b={blue}/>
    </>
  );
}
