import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("0");
  const [rate, setRate] = useState("0");
  const [year, setYear] = useState("0");
  const [month, setMonth] = useState("0");
  const [totalAmount, setTotalAmount] = useState("0");

  const handleAmountChange = (e) => {
    setAmount(parseFloat(e.target.value) || 0); // Convert to number
  };

  const handleRateChange = (e) => {
    setRate(parseFloat(e.target.value) || 0); // Convert to number
  };

  const handleYearChange = (e) => {
    setYear(parseFloat(e.target.value) || 0); // Convert to number
  };

  // Function to calculate final amount based on amount, rate, and year
  const finalAmount = () => {
    let monthlyInterestRate = rate / 100 / 12;

    let totalPayment = year * 12;

    let monthlyPayment =
      (amount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, totalPayment)) /
      (Math.pow(1 + monthlyInterestRate, totalPayment) - 1);

    setMonth(monthlyPayment.toFixed(3));

    const totalCost = monthlyPayment * year * 12;

    setTotalAmount(totalCost.toFixed(3));
  };
  const allClear = () => {
    setAmount("0");
    setMonth("0");
    setRate("0");
    setYear("0");
    setTotalAmount("0");
  };

  return (
    <>
      <div className="relative flex items-top justify-center min-h-[600px] sm:items-center sm:pt-0 mt-[-30px] ">
        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 ">
          <div className="mt-8 overflow-hidden ">
            <div className="grid grid-cols-1 md:grid-cols-2 bg-white ">
              <div className=" p-6  bg-gray-100 sm:rounded-lg ">
                <div className="flex justify-between">
                  <h1 className="text-xl sm:text-2xl text-gray-800 font-extrabold tracking-tight">
                    Mortgage Calculator
                  </h1>
                  <button onClick={allClear}>
                    <p>Clear All</p>
                  </button>
                </div>
                <div>
                  <h3 className="text-xl text-gray-500 ">Mortgage Amount</h3>
                  <div className="flex w-full h-8 border-2 border-gray-400 overflow-hidden rounded-md">
                    <p className="bg-sky-100 w-5 font-bold">€</p>
                    <label for="name" className="hidden">
                      Full Name
                    </label>
                    <input
                      value={amount}
                      onChange={handleAmountChange}
                      type="name"
                      name="name"
                      id="name"
                      placeholder=""
                      className="w-full bg-transparent  py-3 px-3  bg-white text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                    />
                  </div>
                  {/* // section 2nd */}
                  <div className="flex mt-3 flex-col md:flex-row ">
                    <div className="flex flex-col w-full  md:w-[50%]">
                      <p className="text-xl text-gray-500">Mortgage Term</p>
                      <div className="flex justify-between w-full h-8 border-2 border-gray-400 overflow-hidden rounded-md">
                        <label for="name" className="hidden">
                          Full Name
                        </label>
                        <input
                          value={year}
                          onChange={handleYearChange}
                          type="name"
                          name="name"
                          id="name"
                          placeholder=""
                          className="w-full md:w-48  bg-transparent  py-3 px-3  bg-white text-gray-800 outline-none"
                        />
                        <p className="w-14 bg-sky-100 font-bold">years</p>
                      </div>
                    </div>
                    <div className="flex  flex-col w-full md:w-[50%] md:ml-2">
                      <p className=" text-xl text-gray-500">Interest Rate</p>
                      <div className=" flex w-full h-8 border-2 border-gray-400 overflow-hidden rounded-md justify-between">
                        <label for="name" className="hidden">
                          Full Name
                        </label>
                        <input
                          step={0.01}
                          value={rate}
                          onChange={handleRateChange}
                          type="number"
                          name="name"
                          id="name"
                          placeholder=""
                          className="w-auto md:w-[98%]  bg-transparent  py-3 px-3  bg-white text-gray-800 font-semibold focus:border-orange-500 focus:outline-none"
                        />
                        <p className=" bg-sky-100 w-8 font-bold">%</p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* // Section 3rd */}
                <div class="w-64 bg-gray-100 rounded-md">
                  <p class=" text-xl text-gray-500 ">Mortgage Type</p>

                  <label class="flex items-center border border-gray-300 rounded-md p-3 mb-2 cursor-pointer ">
                    <input
                      type="radio"
                      name="mortgage"
                      value="repayment"
                      class="form-radio text-blue-600 mr-2"
                    />
                    <span className="text-sm font-bold">Repayment</span>
                  </label>

                  <label class="flex items-center border border-gray-300 rounded-md p-3 cursor-pointer">
                    <input
                      type="radio"
                      name="mortgage"
                      value="interest"
                      class="form-radio text-blue-600 mr-2"
                    />
                    <span className="text-sm font-bold">Interest Only</span>
                  </label>
                </div>
                <div>
                  <button
                    onClick={finalAmount}
                    className="flex  justify-between w-50 h-8  mt-4 p-6 border-2 border-yellow-200 rounded-3xl bg-[#DADD30]"
                  >
                    <img
                      className="w-4 mt-[-8px]"
                      src="https://cdn-icons-png.flaticon.com/128/4248/4248547.png"
                      alt="none"
                    />
                    <p className="mt-[-12px] text-sm font-bold ml-1">
                      Calculate Repayment
                    </p>
                  </button>
                </div>
              </div>
              <div className=" p-6 mr-2 bg-slate-800   md:rounded-bl-[10%] w-full">
                <div className="flex justify-between">
                  <h1 className="text-xl sm:text-2xl text-white font-extrabold tracking-tight">
                    Your Results
                  </h1>
                </div>
                <div>
                  <h3 className="text-xl text-gray-500 mt-4">
                    Your Result are shown below based on the information you
                    provided. To adjust the result edit the form and click
                    'calculate repayment' again
                  </h3>

                  {/* // section 2nd */}
                </div>
                {/* // Section 3rd */}
                <div>
                  <div className="border-t-4  rounded-t-lg border-t-[#DADD30] border-slate-800 bg-slate-900 p-6 w-full mt-2">
                    <h1 className="text-xl text-gray-500">
                      You monthly repayment
                    </h1>
                    <div className="flex w-full overflow-hidden">
                      <p className="text-[#DADD30] font-bold text-4xl mt-3">
                        €
                      </p>
                      <p className="w-auto  bg-transparent  py-3 px-3 text-[#DADD30] text-4xl font-bold underline">
                        {month}
                      </p>
                    </div>
                    <div>
                      <h1 className="text-xl text-gray-500">
                        Total you'll repay over the term
                      </h1>
                      <h1 className="text-white text-3xl font-bold">
                        € {totalAmount}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
