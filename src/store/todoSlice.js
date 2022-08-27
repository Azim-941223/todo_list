import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todo',
    initialState: {
        isLoading: true,
        data: JSON.parse(localStorage.getItem('todo')) || []
    },
    reducers:{
        addTodo: (state,action) => {
            state.data.push({text: action.payload , status: false,id: Date.now()})
        },
        deleteTodo: (state,action) => {
            state.data = state.data.filter((item) => item.id !== action.payload)
        },
        checkTodo: (state,action) => {
            const newArr = state.data.map((item) => {
                if (item.id === action.payload) {
                    item.checked = !item.checked
                }
                return item
                });
            state.data = newArr;
        },
        editTodo: (state,action) => {
            const addNew = state.data.map((item) => {
                if(item.id === action.payload.id){
                  item.text = action.payload.text
                }
                return item
              });
              state.data = addNew;
        },
        setLoading: (state,action) => {
            state.isLoading = action.payload
        }
    }
})

export const todoAction = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
