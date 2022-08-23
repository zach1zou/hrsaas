<template>
  <div>
    <SvgIcon
      iconClass="fullscreen"
      style="color: pink"
      @click="changeScreen"
    ></SvgIcon>
  </div>
</template>
<script>
import SvgIcon from '../SvgIcon/index.vue'
import ScreenFull from 'screenfull'
export default {
  props: {
    arr: {
      type: Array,
      default: () => []
    },
    obj: {
      type: Object,
      default: () => {}
    }
  },
  components: { SvgIcon },
  data() {
    return {}
  },
  methods: {
    changeScreen() {
      if (ScreenFull.isEnabled) {
        ScreenFull.toggle()
      }
    }
  },
  mounted() {},
  computed: {},
  watch: {},
  updated() {},
  beforeDestroy() {},
  filters: {}
}
</script>
<style lang="less" scoped></style>
