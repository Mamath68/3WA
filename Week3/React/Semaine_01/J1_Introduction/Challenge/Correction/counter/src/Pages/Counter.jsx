import Button from '../Components/Button'

export default function Counter() {
    return (
        <div className="main">
            <h1>Counter Challenge 1</h1>
            <Button step={1} />
            <Button step={2} />
            <Button step={1} modulo={2} />
        </div>
    );
}