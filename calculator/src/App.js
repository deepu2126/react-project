import { useState } from "react";
import "./App.css";

function App() {
  const [inputField, setInputField] = useState(0);
  const [saveNum, setSaveNum] = useState(0);
  const [operation, setOperation] = useState("");

  const updateNum = (num) => {
    if (inputField.toString().length < 10) {
      setInputField(
        inputField != 0
          ? inputField.toString() + num.toString()
          : num.toString()
      );
    }
  };

  const add = () => {
    setSaveNum(inputField);
    setInputField(0);
    setOperation("add");
  };

  return (
    <>
      <h2 className="text-center">Calculator</h2>
      <div className="flex justify-center items-center">
        <div className="w-[350px] h-[550px] bg-black rounded-lg font-medium text-xl">
          <div className="h-1/3 w-full">
            <div className="h-4/5"></div>
            <div className="h-1/5 flex flex-row-reverse px-10 text-3xl">
              {inputField}
            </div>
          </div>
          <div className="h-2/3 w-full flex">
            <div className="w-3/4 h-full">
              <div className="h-1/5 w-full grid grid-cols-3 text-center place-items-center">
                <div
                  onClick={() => setInputField(0)}
                  className="flex items-center justify-center bg-[#a5a5a5] rounded-full h-16 w-16"
                >
                  AC
                </div>
                <div className="flex items-center justify-center bg-[#a5a5a5] rounded-full h-16 w-16">
                  +/-
                </div>
                <div className="flex items-center justify-center bg-[#a5a5a5] rounded-full h-16 w-16">
                  %
                </div>
              </div>
              <div className="h-1/5 w-full grid grid-cols-3 text-center place-items-center">
                <div
                  onClick={() => updateNum(7)}
                  className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16"
                >
                  7
                </div>
                <div
                  onClick={() => updateNum(8)}
                  className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16"
                >
                  8
                </div>
                <div
                  onClick={() => updateNum(9)}
                  className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16"
                >
                  9
                </div>
              </div>
              <div className="h-1/5 w-full grid grid-cols-3 text-center place-items-center">
                <div
                  onClick={() => updateNum(4)}
                  className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16"
                >
                  4
                </div>
                <div
                  onClick={() => updateNum(5)}
                  className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16"
                >
                  5
                </div>
                <div
                  onClick={() => updateNum(6)}
                  className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16"
                >
                  6
                </div>
              </div>
              <div className="h-1/5 w-full grid grid-cols-3 text-center place-items-center">
                <div
                  onClick={() => updateNum(1)}
                  className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16"
                >
                  1
                </div>
                <div
                  onClick={() => updateNum(2)}
                  className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16"
                >
                  2
                </div>
                <div
                  onClick={() => updateNum(3)}
                  className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16"
                >
                  3
                </div>
              </div>
              <div className="h-1/5 w-full grid grid-cols-3 text-center place-items-center">
                <div
                  onClick={() => updateNum(0)}
                  className="col-span-2 flex items-center justify-center bg-[#333333] text-white rounded-full w-40 h-16"
                >
                  0
                </div>
                <div className="flex items-center justify-center bg-[#333333] text-white rounded-full h-16 w-16">
                  .
                </div>
              </div>
            </div>
            <div className="w-1/4 h-full grid grid-row-5 place-items-center">
              <div className="flex items-center justify-center bg-yellow-500 rounded-full h-16 w-16">
                ÷
              </div>
              <div className="flex items-center justify-center bg-yellow-500 rounded-full h-16 w-16">
                x
              </div>
              <div className="flex items-center justify-center bg-yellow-500 rounded-full h-16 w-16">
                -
              </div>
              <div
                onClick={() => add()}
                className="flex items-center justify-center bg-yellow-500 rounded-full h-16 w-16"
              >
                +
              </div>
              <div className="flex items-center justify-center bg-yellow-500 rounded-full h-16 w-16">
                =
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
