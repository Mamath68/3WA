import { useCalculator } from "../store/calculate"


function Button({ number }) {
    const { setNumber } = useCalculator()

    return (
        <button
            onClick={() => setNumber(number)}
            className="p-2 bg-gray-300 text-white rounded"
        >
            {number}
        </button>
    )
}

export default Button