import { createSlice } from '@reduxjs/toolkit';
import dashboardData from '../dashboardData.json';

const getStoredDashboardState = () => {
    try {
        const stored = localStorage.getItem('dashboardState');
        return stored ? JSON.parse(stored) : null;
    } catch (error) {
        console.warn('Failed to load dashboard state from localStorage:', error);
        return null;
    }
};

const initialState = getStoredDashboardState() ?? {
    categories: dashboardData.categories,
};


const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        addWidget: (state, action) => {
            const { categoryId, widget } = action.payload;
            const category = state.categories.find((eachCategory) => eachCategory.id === categoryId);
            if (category) category.widgets.push(widget);
        },
        removeWidget: (state, action) => {
            const { categoryId, widgetId } = action.payload;
            const category = state.categories.find((eachCategory) => eachCategory.id === categoryId);
            if (category)
                category.widgets = category.widgets.map((eachWidget) => eachWidget.id === widgetId ? { ...eachWidget, active: false } : eachWidget);
        },
        updateAllWidgets: (state, action) => {
            state.categories = action.payload;
        },
    },
});

export const { addWidget, removeWidget, updateAllWidgets } = dashboardSlice.actions;
export default dashboardSlice.reducer;
