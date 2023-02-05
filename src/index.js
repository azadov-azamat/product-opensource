import React from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App'
import {Provider} from "react-redux"
import {store} from "./redux/store"
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';

const app = (<Provider store={store}>
    <App/>
    <ToastContainer newestOnTop/>
</Provider>)

const container = document.getElementById('root')
const root = createRoot(container)

root.render(app)