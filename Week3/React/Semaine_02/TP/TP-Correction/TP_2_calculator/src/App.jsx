import { useEffect } from 'react'
import Layout from './components/Layout'
import Button from './components/Button';
import { useCalculator } from './store/calculate'
import { save } from './store/storage';

function App() {
  const { state: { buttons, number, symbols, symbol, total }, reset, setSymbol, calculTotal } = useCalculator()

  console.log(symbols)

  useEffect(() => {
    (async () => symbols.length > 0 ? save(symbols) : null)()
  }, [calculTotal])

  return <Layout>
    <div className="bg-white p-8 rounded shadow-md">
      <div className="mb-4">
        <input value={number} type="text" className="w-full p-2 border border-gray-300 rounded" readOnly />
        {<p> calcul : {total ? total : null} {symbol != '=' ? symbol : null} {symbol != '=' ? number : null}</p>}
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button onClick={reset} className="p-2 bg-gray-300 text-white rounded" >C</button>
        <button onClick={() => setSymbol("*")} className="p-2 bg-gray-300 text-white rounded" >X</button>
        <button onClick={() => setSymbol("+")} className="p-2 bg-gray-300 text-white rounded" >+</button>
        <button onClick={() => setSymbol("-")} className="p-2 bg-gray-300 text-white rounded" >-</button>
        {buttons.map(number => <Button key={number} number={number} />)}
        <button onClick={calculTotal} className="col-span-2 p-2 bg-gray-300 text-white rounded" >=</button>
      </div>
    </div>
  </Layout>
}

export default App