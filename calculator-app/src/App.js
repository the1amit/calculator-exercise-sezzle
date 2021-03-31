import { useEffect, useMemo, useState } from "react";
import "./App.css";
import Button from "./Button";
import Input from "./Input";
import Log from "./Log";
import { io } from "socket.io-client";

//const localURL = "http://localhost:4000";
const URL = "https://calculator-backend-app.herokuapp.com";

const socket = io(URL, {
  transports: ["websocket"],
});

function App() {
  const [input, setInput] = useState("");
  const [previousNumber, setPreviousNumber] = useState("");
  const [currentNumber, setCurrentNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [logs, setLogs] = useState([]);

  const addToInput = (val) => {
    setInput((prevInput) => prevInput + val);
  };

  //this function will prevent zero as an only/beginning value of the input
  const addZeroToInput = (val) => {
    input.length > 0 && setInput((prevInput) => prevInput + val);
  };
  const addDecimToInput = (val) => {
    input.indexOf(".") === -1 && setInput((prevInput) => prevInput + val);
  };
  const inputClear = () => {
    setInput("");
    setCurrentNumber("");
    setPreviousNumber("");
    setOperator("");
  };
  const addOperator = (val) => {
    input?.length > 0 && setPreviousNumber(input); //this will add input value into previousNumber(first operand)
    setOperator(val); //assign the user-selected operator
    setInput("");
  };

  const evaluate = () => {
    previousNumber && setCurrentNumber(input);
    setInput("");
  };

  useEffect(() => {
    currentNumber?.length > 0 && evaluateNow(); //this will call the evaluateNow method if currentNumber's value been assigned
    // eslint-disable-next-line
  }, [currentNumber]);

  const evaluateNow = () => {
    let result;
    switch (operator) {
      case "+":
        result = parseFloat(previousNumber) + parseFloat(currentNumber);
        break;
      case "-":
        result = parseFloat(previousNumber) - parseFloat(currentNumber);
        break;
      case "/":
        result = parseFloat(previousNumber) / parseFloat(currentNumber);
        break;
      case "*":
        result = parseFloat(previousNumber) * parseFloat(currentNumber);
        break;
      default:
        setInput("");
        break;
    }
    //if the result has a decimal point, then it will only show two floating points
    result.toString().includes(".") && (result = result.toFixed(2));

    setInput(result.toString());

    const data = `${previousNumber}  ${operator}  ${currentNumber} = ${result}`;

    //emitting the equation for a log
    socket.emit("message", {
      data,
    });

    setCurrentNumber("");
    setPreviousNumber("");
    setOperator("");
  };

  //assigning the values into logs array through socket
  useEffect(() => {
    socket.on("message", ({ data }) => {
      if (logs.length < 10) {
        setLogs([data, ...logs]);
      } else {
        logs.pop();
        setLogs([data, ...logs]);
      }
    });
  }, [logs]);

  return (
    <div className="app">
      {/* calcultor starts */}
      <div className="calcultor">
        <div className="row">
          <div className="previous_number">{previousNumber}</div>
          <Input>{input}</Input>
        </div>
        <div className="row">
          <Button handleClick={addToInput} value={7} />
          <Button handleClick={addToInput} value={8} />
          <Button handleClick={addToInput} value={9} />
          <Button handleClick={addOperator} value={"+"} />
        </div>
        <div className="row">
          <Button handleClick={addToInput} value={4} />
          <Button handleClick={addToInput} value={5} />
          <Button handleClick={addToInput} value={6} />
          <Button handleClick={addOperator} value={"/"} />
        </div>
        <div className="row">
          <Button handleClick={addToInput} value={1} />
          <Button handleClick={addToInput} value={2} />
          <Button handleClick={addToInput} value={3} />
          <Button handleClick={addOperator} value={"-"} />
        </div>
        <div className="row">
          <Button handleClick={addDecimToInput} value={"."} />
          <Button handleClick={addZeroToInput} value={0} />
          <Button handleClick={evaluate} value={"="} />
          <Button handleClick={addOperator} value={"*"} />
        </div>

        <div className="row">
          <Button handleClick={inputClear} id="clear" value={"Clear"} />
        </div>
      </div>
      {/* calcultor end*/}

      {/* Logs starts*/}
      <div className="result_log">
        <h1>Calculations Logs</h1>
        <div className="logs">
          {/* using useMemo hook to improve performance */}
          {useMemo(() => {
            let i = 50;
            return logs?.map((log, index) => <Log key={i++} data={log} />);
          }, [logs])}
        </div>
      </div>
      {/* logs end*/}
    </div>
  );
}

export default App;
