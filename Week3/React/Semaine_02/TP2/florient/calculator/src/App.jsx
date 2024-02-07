import Layout from './components/Layout'
import Button from './components/Button';
import { useCalculator } from './store/calculate'

function App() {
  const { state: { number, buttons }, reset } = useCalculator();

  return <Layout>
    <div className="bg-white p-8 rounded shadow-md">
      <div className="mb-4">
        <input value={number} type="text" className="w-full p-2 border border-gray-300 rounded" readOnly />
      </div>
      <div className="grid grid-cols-4 gap-4">
        <button onClick={reset} className="col-span-2 p-2 bg-gray-300 text-white rounded" >C</button>
        <button className="p-2 bg-gray-300 text-white rounded" >X</button>
        <button className="p-2 bg-gray-300 text-white rounded" >+</button>
        {buttons.map(n => <Button key={n} number={n} />)}
        <button className="col-span-2 p-2 bg-gray-300 text-white rounded" >=</button>
      </div>
    </div>
  </Layout>
}

export default App