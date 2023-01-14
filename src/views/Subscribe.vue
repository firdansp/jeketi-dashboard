<template>
  <div>
   <CardCollections :members="members" />
  </div>
</template>

<script>
  import CardCollections from '@/components/CardCollections';
  export default {
    components: {
      CardCollections
    },
    created: async function () {
      const members = await this.$axios.get('/members');
      this.members = members.data;
    },
    watch: {
      members : () => {}
    },
    data: function () {
      return {
        members: []
      }
    }
  }
</script>

<style>

</style>