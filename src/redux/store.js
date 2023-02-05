import reducers from './reducers'
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer: reducers,
    middleware: getDefaultMiddleware => {
        return getDefaultMiddleware({
            serializableCheck: false
        })
    }
})

export {store}