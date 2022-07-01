import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        books: []
    },
    getters:{
        books(state){
            return state.books
        },
    },
    mutations:{
        setBooks(state,books){
            state.books = books
        },
    },
    actions:{
        async fetchAllBooks(context){
            await fetch("https://riabooksapi.azurewebsites.net/books")
            .then((response) => response.json())
            .then((data) =>{
                context.commit("setBooks", data)
            })
            .catch((err) => console.error(err))
            
        },
    }
})
