import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Day from '../components/Day'

export default createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/day/:dayId",
        element: <Day />
    },

])