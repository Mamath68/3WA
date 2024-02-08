import { useCalculator } from "../store/calculate"


function Button({ number }) {
    const { setSymbol } = useCalculator()

    return (
        <button
            onClick={() => setSymbol(number)}
            className="p-2 bg-gray-300 text-white rounded"
        >
            {number}
        </button>
    )
}

export default Button