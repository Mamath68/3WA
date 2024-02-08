import Main from "../navigation/Main"

function Layout({ children }) {

    return (
        <>
            <Main />
            <div className="bg-gray-100 flex items-center justify-center">
                {children}
            </div>
        </>
    )
}

export default Layout