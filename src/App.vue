<template>
  <div id="app" >
    <div class="container_app" data-theme="light" id="darkMode">
      <div class="app_header">
        <div class="serch_bar">
          <input type="text" name="" id="" v-model="search">
        </div>
        <div class="theme-switch-wrapper" >
          <input type="checkbox" id="toggle_checkbox" @click="toggleDarkMode">
          <label for="toggle_checkbox"></label>
        </div>

    </div>
      <BookComponent class="list" :tomes="filteredBooks"/>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import BookComponent from './components/BookComponent.vue'
export default {
  data(){
    return{
      search: '',
      tomes: [],
      cards: [],
      author: '',
      genre: '',
      tome:{
        title: '',
        author: '',
        img: '',
        description: ''
      }
      }
  },
  async mounted() {
    await this.fetchAllBooks();
    this.tomes = this.books.books
  },

  methods: {
    setData(){
      console.log('test');
      // this.tome.title = this.tomes.title
    },
        ...mapActions(["fetchAllBooks"]),
      toggleDarkMode() {
      const container = document.getElementById("darkMode");
      const dataTheme = container.getAttribute("data-theme");
      if (dataTheme == "light") {
        container.setAttribute("data-theme", "dark");
      } else {
        container.setAttribute("data-theme", "light");
      }
    },

  },
  computed: {
    filteredBooks: function(){
        return this.tomes.filter((book) => {
          book.authors.forEach(el =>{
            this.author = el
          })
          book.categories.forEach(el =>{
            this.genre = el
          })
          console.log(this.author);
          return book.title.toLowerCase().match(this.search.toLowerCase()) || this.author.toLowerCase().match(this.search.toLowerCase()) || this.genre.toLowerCase().match(this.search.toLowerCase())
        })
    },
    ...mapGetters(["books"]),
  },
  name: 'App',
  components: {
    BookComponent,
  }
}
</script>

<style>
 @import './assets/style.css';
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
