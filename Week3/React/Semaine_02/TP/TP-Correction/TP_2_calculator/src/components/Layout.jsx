import Main from "../navigation/Main"

function Layout({ children }) {

    return (
        <>
            <Main />
            <div className="bg-gray-100 h-screen flex items-center justify-center">
                {children}
            </div>
        </>
    )
}

export default Layout