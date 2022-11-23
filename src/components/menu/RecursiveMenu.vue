<template>
  <div class="tree-menu group relative">
    <!-- label node parent -->
    <div :style="indent" :class="depth !== 0 ? 'border-b border-gray-500 px-8 py-2': ''" class="whitespace-nowrap text-textColor text-lg ">{{ $t(label) }}</div>
    <div v-if="nodes.length" :class="depth == 0 ? 'absolute opacity-0 group-hover:opacity-100 invisible group-hover:visible bg-white top-10 border-2 border-gray-400 rounded-b-md transition-all ease-in-out duration-500': ''">
      <!-- @for of child nodes -->
      <div
      v-for="item, index in nodes"
        :key="index + '-elementR'"
       >
      <!-- Call component recursively -->
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
  /**
 * Name component
 */
  name: 'tree-menu',
  props: [
    /**
    * Name of node
    * @values String
    */
    'label', 
    /**
    * Object with nodes
    * @values array object
    */
    'nodes', 
    /**
    * number depth of node
    * @values number
    */
    'depth'
  ],
  computed: {
    /**
    * func computed for add padding to node
    */
    indent() {
      return { 'padding-left': `${this.depth * 10}px` }
    }
  }
}
</script>