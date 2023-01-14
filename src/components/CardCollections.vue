<template>
  <v-container class="fill-height" fluid>
    <v-col v-for="(member, index) in members" :key="index" :name="member.name" :src="member.imgURL" cols="6" sm="6"
      md="3">
      <Card :name="member.name" :src="member.imgURL" />
    </v-col>
  </v-container>
</template>

<script>
import Card from '@/components/Card';
export default {
  props: [ 'members' ],
  components: {
    Card
  }
}
</script>

<style>

</style>