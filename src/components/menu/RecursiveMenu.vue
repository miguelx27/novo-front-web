<template>
  <div class="tree-menu group relative">
    <div :style="indent" :class="depth !== 0 ? 'border-b border-gray-500 px-8 py-2': ''" class="whitespace-nowrap text-textColor text-lg ">{{ $t(label) }}</div>
    <div v-if="nodes.length" :class="depth == 0 ? 'absolute hidden group-hover:block bg-white top-11 border-2 border-gray-400 rounded-b-md': ''">
      <div
      v-for="item, index in nodes"
        :key="index + '-elementR'"
       >
        <tree-menu
        v-for="element, name in item"
        :nodes="element"
        :label="name"
        :depth="depth + 1"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['label', 'nodes', 'depth'],
  name: 'tree-menu',
  computed: {
    indent() {
      return { 'padding-left': `${this.depth * 10}px` }
    }
  }
}
</script>