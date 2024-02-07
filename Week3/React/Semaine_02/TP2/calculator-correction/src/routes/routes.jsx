import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../pages/App';
import Layout from '../components/Layout';
import Contact from '../pages/Contact';
import Semaine from '../pages/Semaine';
import Jour from '../pages/Jour';

export const router = createBrowserRouter([
    {
        path: '/',
        element: (
            <Layout>
                <App />
            </Layout>
        ),
    },
    {
        path: '/contact',
        element: (
            <Layout>
                <Contact />
            </Layout>
        ),
    },
    {
        path: '/semaine',
        element: (
            <Layout>
                <Semaine />
            </Layout>
        ),
    },
    {
        path: '/jour/:jourId',
        element: (
            <Layout>
                <Jour />
            </Layout>
        ),
    },
]);
