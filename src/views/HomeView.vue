<template>
  <editor></editor>
</template>

<script>
// @ is an alias to /src
import EditorComponent from '@/components/EditorComponent.vue'

export default {
  name: 'HomeView',
  components: {
    'editor': EditorComponent
  }
}
</script>
