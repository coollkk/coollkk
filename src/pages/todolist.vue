<template>
    <div>
          <form  @submit.prevent='handleSubmit'>
            <input type="text" v-model="others">其他事項<br>

                    <span>待辦事項</span><br>
            <input type="checkbox" value='米'  v-model='todos'>
            <label for="rice">米</label>
            <input type="checkbox"  value='加油' v-model='todos'>
            <label for="oil">加油</label>
            <input type="checkbox"  value='鹽巴' v-model='todos'>
            <label for="salt">鹽巴</label><br>
            <input type="checkbox" value='醬油' v-model='todos'>
            <label for="oiloil">醬油</label>
            <input type="checkbox"  value='醋' v-model='todos'>
            <label for="chu">醋</label>
            <input type="checkbox"  value='飲料' v-model='todos'>
            <label for="softdrinks">飲料</label><br>
            <input type="checkbox" value='零食' v-model='todos'>
            <label for="snack">零食</label>
            <input type="checkbox"  value='青菜' v-model='todos'>
            <label for="vegetable">青菜</label>
            <input type="checkbox"  value='魚' v-model='todos'>
            <label for="fish">魚</label><br>
            <input type="checkbox" value='肉' v-model='todos'>
            <label for="meat">肉</label>
            <input type="checkbox"  value='蛋' v-model='todos'>
            <label for="egg">蛋</label>
            <input type="checkbox"  value='繳費' v-model='todos'>
            <label for="expense">繳費</label><br>
             <input type="submit" value="生成待辦清單">
        </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
      others: '',
      todos: []
    }
  },
  methods: {
    handleSubmit () {
      this.$store.dispatch('handleSubmit', {todos: this.todos, others: this.others})
    }
  }
}
</script>
