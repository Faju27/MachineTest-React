import 'bootstrap/dist/css/bootstrap.min.css';
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ProductProvider from './Provider/ProductProvider.jsx';

createRoot(document.getElementById('root')).render(
    <ProductProvider>
        <App />
    </ProductProvider>
)
