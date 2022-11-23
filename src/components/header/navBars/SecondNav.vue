<template>
  <div class="bg-white px-5 shadow-md">
    <div 
      v-for="value, index in JSON.lista"
      :key="index + '-' + 'list'"
      class="flex"
    >
      <div
      v-for="item, name, index2 in value"
      class="p-3 cursor-pointer hover:border-primaryBlue border-transparent border-b-4 relative group"
      :key="index2+ '-' + name">
          <Menu :nodes="item" :label="name" :depth="0" />
      </div>
    </div>
  </div>
</template>
<script setup>
import JSON from "../../../service/servicio.json"
import Menu from "../../menu/RecursiveMenu.vue"
</script>