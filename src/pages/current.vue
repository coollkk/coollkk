<template>
    <div>{{todos}} {{others}}</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['todos', 'others'])
  }
}
</script>
