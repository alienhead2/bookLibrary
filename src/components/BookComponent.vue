<template>
  <div>
    <b-modal id="modal-1" title="Book Modal" hide-footer>
      <div class="book_modal">
      <img :src="tome.img" alt="" class="book_modal__img">
      <span class="book_modal__title">
        {{tome.title}}
      </span>
      <div class="book_modal_author">
      <span v-for="(author, idx) in tome.author" :key="idx"> {{author}} </span>
      </div>
      <div class="book_modal__description">
        <span>
          {{tome.description}}
        </span>
      </div>
      </div>
    </b-modal>
    <div class="view_type">
      <span class="grid_view" @click="gridView">Grid View</span>
      <span class="list_view" @click="listView">List View</span>
    </div>
      <div v-for="(book, idx) in tomes" :key="idx" @click="setData(book)" class="book_card list" v-b-modal.modal-1>

        <img :src="book.thumbnailURL" alt="" class="book_image">
        <div class="card_info">
          <div class="title">
        <span >{{book.title}}</span>
          </div>
        <div class="authors">
          <span v-for="(author, index) in book.authors" :key="index">{{author}}</span>
        </div>
        <div class="genre">
          <span v-for="(category,id) in book.categories" :key="id">{{category}}</span>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      tome:{
        title: '',
        img: '',
        author: [],
        description: ''
      }
    }
  },
    props:['tomes'],
    methods:{
      setData(book){
        this.tome.title = book.title
        this.tome.img = book.thumbnailURL
        this.tome.author = book.authors
        this.tome.description = book.shortDescription
      },
      listView(){
        let cards = document.querySelectorAll('.book_card')
        cards.forEach(el =>{
          if(el.classList.contains('grid')){
            el.classList.remove('grid')
            el.classList.add('list')
          }
        })
      },
      gridView(){
        let cards = document.querySelectorAll('.book_card')
        cards.forEach(el =>{
          if(el.classList.contains('list')){
            el.classList.remove('list')
            el.classList.add('grid')
          }
        })
      },
    },
}
</script>

<style>

</style>