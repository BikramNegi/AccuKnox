import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashboardSlice';


const localStorageMiddleware = (store) => (next) => (action) => {
    const result = next(action);
    try {
        const dashboardState = store.getState().dashboard;
        localStorage.setItem('dashboardState', JSON.stringify(dashboardState));
    } catch (error) {
        console.warn('Failed to save dashboard state to localStorage:', error);
    }

    return result;
};

export const store = configureStore({
    reducer: {
        dashboard: dashboardReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(localStorageMiddleware),
});
