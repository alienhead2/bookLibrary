import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        darkMode: false,
        books: []
    },
    getters:{
        books(state){
            return state.books
        },
        darkMode(state){
            return state.darkMode
        }
    },
    mutations:{
        setBooks(state,books){
            state.books = books
        },
        setDarkMode(state,mode){
            state.darkMode = mode
            window.localStorage.setItem('darkMode', mode)
        }
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
        setDarkMode({commit}, payload){
            commit("setDarkMode", payload)
        }
    }
})