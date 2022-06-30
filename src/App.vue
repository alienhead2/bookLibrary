<template>
  <div id="app" >
    <div class="container_app" data-theme="light" id="darkMode">
      <div class="app_header">
        <div class="serch_bar">
          <input type="text" name="" id="" v-model="search" placeholder="Search...">
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
        ...mapActions(["fetchAllBooks"]),
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
