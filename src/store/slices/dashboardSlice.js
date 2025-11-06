import { createSlice } from '@reduxjs/toolkit';
import dashboardData from '../dashboardData.json';

let storedDashboardState = null;

try {
    storedDashboardState = localStorage.getItem('dashboardState');
} catch (error) {
    console.log(error);
}

const initialState = storedDashboardState
    ? JSON.parse(storedDashboardState)
    : {
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
                category.widgets = category.widgets.filter((eachWidget) => eachWidget.id !== widgetId);
        },
    },
});

export const { addWidget, removeWidget } = dashboardSlice.actions;
export default dashboardSlice.reducer;
