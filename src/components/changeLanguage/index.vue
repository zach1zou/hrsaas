<template>
  <div>
    <el-dropdown @command="onCommand">
      <span class="el-dropdown-link">
        中英文切换<i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item
          :command="key"
          v-for="(value, key) in messages"
          :key="key"
          >{{ value.name }}</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { messages } from '@/i18n'
export default {
  props: {},
  components: {},
  data() {
    return {
      messages
    }
  },
  methods: {
    onCommand(val) {
      this.$i18n.locale = val
      localStorage.setItem('lang', val)
      this.$router.go(0)
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
<style lang="less" scoped>
.el-dropdown-link {
  cursor: pointer;
  color: white;
}
.el-icon-arrow-down {
  font-size: 12px;
}
</style>
