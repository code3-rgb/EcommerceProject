// import { createStore } from "redux"

// const reducerFn = (state = { counter: 0 }, action)=>{

//     // Synchronous Function
//     // We should not mutate the Original State

//     switch(action.type) {
//         case 'INC':
//         return { counter: state.counter+1 }

//         case 'DEC':
//         if(state.counter > 0)
//         return { counter: state.counter-1 }

//         case 'ADD':
//         return { counter: state.counter + action.payload }
        
        
//     }

//     return state
// }


// const store = createStore(reducerFn)

// export default store




import { configureStore, createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice ({
    name: 'SetName',
    initialState : { firstName: '',lastName:'',age:'' },
    reducers: {
        // increment(state,action) {
        //     state.counter++
        // },
        // decrement(state,action) {
        //     state.counter--
        // },John
        // addBy(state,action) {
        //     state.counter += action.payload
        // },
        addName(state,action) {
            // if(action.payload === '')   return
            // state.firstName = action.payload
            const { firstName,lastName,age } = action.payload
            state.firstName = firstName
            state.lastName = lastName
            state.age = age
        }
    }
})


export const actions = counterSlice.actions
const store = configureStore({
        reducer: counterSlice.reducer,
        
})

export default store 