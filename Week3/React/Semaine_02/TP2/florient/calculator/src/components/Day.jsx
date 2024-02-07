import React from 'react'
import Layout from './Layout'

function Day() {
    return (
        <Layout>
            <h1>Day {new Date().getDay()}</h1>
        </Layout>
    )
}

export default Day