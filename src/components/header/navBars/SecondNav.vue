<template>
  <div class="bg-white px-5 shadow-md">
    <!-- @for of elements in service -->
    <div 
      v-for="value, index in JSON.lista"
      :key="index + '-' + 'list'"
      class="flex"
    >
      <!-- @for of elements in list of service -->
      <div
      v-for="item, name, index2 in value"
      class="px-3 py-2 cursor-pointer hover:border-primaryBlue border-transparent border-b-4 relative group"
      :key="index2+ '-' + name">
          <!-- Call component recursive menu 
          props nodes array | object label name  and depth init -->
          <Menu :nodes="item" :label="name" :depth="0" />
      </div>
    </div>
  </div>
</template>
<script setup>
/**
 * JSON from service
 */
import JSON from "../../../service/servicio.json"
/**
 * Component recursive menu
 */
import Menu from "../../menu/RecursiveMenu.vue"
</script>