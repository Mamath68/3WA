import React, { useEffect, useReducer } from 'react';
import { reducer, initialState } from '../../reducers/calc';
import { saveOperation } from '../../LocalForage/LocalForage';

const Calculatrice = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  function initDigit(digit) {
    dispatch({ type: 'INIT_VALUE', payload: digit });
  }

  useEffect(() => {
    if (state.result) saveOperation(state.result);
  }, [state.result]);

  return (
    <div className="min-w-screen bg-gray-100 flex items-center justify-center px-5 py-5">
      <div
        className="w-full mx-auto rounded-xl bg-gray-100 shadow-xl text-gray-800 relative overflow-hidden"
        style={{ maxWidth: '300px' }}
      >
        <div className="w-full h-40 bg-gradient-to-b from-gray-800 to-gray-700 flex items-end text-right">
          <div className="w-full py-5 px-6 text-6xl text-white font-thin">{state.currentValue}</div>
        </div>
        <div className="w-full bg-gradient-to-b from-indigo-400 to-indigo-500">
          <div className="flex w-full">


          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('7')}
              >
                7
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('8')}
              >
                8
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('9')}
              >
                9
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch({ type: 'OPERATE', payload: 'x' })}
              >
                ⨉
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('4')}
              >
                4
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('5')}
              >
                5
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('6')}
              >
                6
              </button>
            </div>

            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-10 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => dispatch({ type: 'OPERATE', payload: '+' })}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('1')}
              >
                1
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('2')}
              >
                2
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('3')}
              >
                3
              </button>
            </div>
            <div className="w-1/4 border-r border-b border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-opacity-50 text-xl font-light"
                onClick={() => dispatch({ type: 'RESET' })}
              >
                C
              </button>
            </div>
          </div>
          <div className="flex w-full">
            <div className="w-1/4 border-r border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('0')}
              >
                0
              </button>
            </div>
            <div className="w-1/4 border-r border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none hover:bg-indigo-700 hover:bg-opacity-20 text-white text-xl font-light"
                onClick={() => initDigit('.')}
              >
                .
              </button>
            </div>
            <div className="w-2/4 border-r border-indigo-400">
              <button
                className="w-full h-16 outline-none focus:outline-none bg-indigo-700 bg-opacity-30 hover:bg-opacity-40 text-white text-xl font-light"
                onClick={() => dispatch({ type: 'RESULT' })}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calculatrice;
