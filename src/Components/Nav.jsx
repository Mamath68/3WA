import { Link } from 'react-router-dom'

export function Nav(props) {

    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/challenge/1">Challenge 1</Link>
            </li>
            <li>
                <Link to="/challenge/2">Challenge 2</Link>
            </li>
            <li>
                <Link to="/challenge/3">Challenge 3</Link>
            </li>
        </ul>
    )
}