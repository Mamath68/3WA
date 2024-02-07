import Main from "../navigation/Main"

function Layout({ children }) {

    return (
        <>
            <Main />
            <main className="bg-gray-100 h-screen flex items-center justify-center">
                {children}
            </main>
        </>
    )
}

export default Layout
