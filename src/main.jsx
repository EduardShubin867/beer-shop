import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom'

import Products from './components/Products/Products'
import Layout from './components/Layout/Layout'
import ProductDetails from './components/ProductDetails/ProductDetails'
import { CartProvider } from './context/CartContext'

import './index.css'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="/product/:id" element={<ProductDetails />} />
        </Route>
    )
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ChakraProvider>
            <CartProvider>
                <RouterProvider router={router} />
            </CartProvider>
        </ChakraProvider>
    </React.StrictMode>
)