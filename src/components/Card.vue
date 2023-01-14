<template>
  <v-card 
    :loading="loading"
  >
    <v-img
      v-if="imgSource" 
      :src="imgSource" 
      width="100%"
      @load="updateLoading"
    />
    <v-card-title style="word-break:break-word;">{{name}}</v-card-title>
  </v-card>
</template>

<script>
export default {
  props: ['name', 'src'],
  data: () => ({
    imgSource: null,
    loading: true,
  }),
  mounted: function () {
    let link = this.src.split('_s.jpg')[0];
    if (!link.includes('.jpg')) {
      link += '.jpg'
    }
    this.imgSource = link
  },
  methods: {
    updateLoading: function () {
      this.loading = false
    }
  }
}
</script>

<style>
</style>