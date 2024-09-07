import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { RouterProvider } from 'react-router-dom'
import router from './Routes/Router.jsx'
import AuthProvider from './Providers/AuthProvider.jsx'
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
import ProductsProvider from './Providers/ProductsProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
    <HelmetProvider>
    <AuthProvider>
    <ProductsProvider>
    <RouterProvider router={router}/>
    </ProductsProvider>
    </AuthProvider>
    </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>,
)
