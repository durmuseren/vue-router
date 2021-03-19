<template>
  <div class="container">
    <h3>User Component</h3>
    <hr>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, earum libero odit optio repellendus sed
      soluta? Animi, atque blanditiis commodi consequatur distinctio dolorem eaque eos expedita, modi reprehenderit
      repudiandae soluta.
    </p>
    <hr> 
  <p> User id: {{ id }}</p>
  </div>
</template>
<script>
  export default {
 data(){
   return{
     id : this.$route.params.id
   }
 },
 watch : {
   "$route"(to, from) {
     this.id = to.params.id;
   }
 }
 
  }
</script>
