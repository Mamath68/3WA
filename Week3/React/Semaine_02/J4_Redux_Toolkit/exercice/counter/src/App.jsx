import { useEffect } from 'react';
import './App.css'
import { useDispatch, useSelector } from 'react-redux';
import { changeMessage } from './store/messageSlice';

function App() {
  const Title = 'Home';
  useEffect(() => {
    document.title = Title;
    return () => {
      document.title = 'Redux Toolkit Counter App';
    };
  }, []);

  const { message } = useSelector((s) => s.m);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Message : {message}</h1>
      <button type="button" className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => dispatch(changeMessage(Math.random().toString()))}>Modifier le Message</button>

    </>
  )
}

export default App
