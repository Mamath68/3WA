import { useState } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, changeMessage, toUpperCase, toLowerCase, shuffleMessages } from './store/messageSlice';
import Counter from './components/Counter';

function App() {
  const [value, setValue] = useState('');
  const { message, messages } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addMessage(value));
    setValue('');
  }

  return (
    <>
      <h1 className="text-4xl font-bold mb-4">Message : {message}</h1>

      <div className="mb-4">
        <button
          type="button"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mr-4 rounded"
          onClick={() => dispatch(changeMessage(Math.random().toString()))}
        >
          Change Message
        </button>

        <button
          type="button"
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mr-4 rounded"
          onClick={() => dispatch(toUpperCase())}
        >
          To UpperCase
        </button>

        <button
          type="button"
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 mr-4 rounded"
          onClick={() => dispatch(toLowerCase())}
        >
          To LowerCase
        </button>

        <button
          type="button"
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => dispatch(shuffleMessages())}
        >
          Shuffle Messages
        </button>
      </div>

      <form onSubmit={handleSubmit} className="mb-4">
        <div className="mb-4">
          <input
            type="text"
            name="message"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border rounded py-2 px-4"
          />
        </div>
        <div>
          <button
            disabled={value === ''}
            type="submit"
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${value === '' && 'opacity-50 cursor-not-allowed'}`}
          >
            Add
          </button>
        </div>
      </form>

      {messages.length > 0 && (
        <ul>
          {messages.map((message, index) => (
            <li key={index} className="ml-4 list-none">{message}</li>
          ))}
        </ul>
      )}

      <Counter />
    </>
  );


}

export default App
