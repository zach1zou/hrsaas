<template>
  <div>
    <el-row
      type="flex"
      justify="space-between"
      align="middle"
      style="height: 40px; width: 1000px"
    >
      <el-col>
        <span>{{ treeNode.name }}</span>
      </el-col>
      <el-col :span="5">
        <el-row type="flex" justify="end">
          <!-- 两个内容 -->
          <el-col>{{ treeNode.manager }}</el-col>
          <el-col>
            <!-- 下拉菜单 element -->
            <el-dropdown>
              <span> 操作<i class="el-icon-arrow-down" /> </span>
              <!-- 下拉菜单 -->
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item @click.native="$emit('add', treeNode)"
                  >添加子部门</el-dropdown-item
                >
                <template v-if="!isRoot">
                  <el-dropdown-item @click.native="$emit('edit', treeNode)"
                    >编辑子部门</el-dropdown-item
                  >
                  <el-dropdown-item @click.native="onRemove"
                    >删除子部门</el-dropdown-item
                  >
                </template>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import { DelDeptsApi } from '@/api/departments'
export default {
  props: {
    treeNode: {
      type: Object,
      default: () => {}
    },
    isRoot: {
      type: Boolean,
      default: false
    }
  },
  name: 'treeTools',
  components: {},
  data() {
    return {}
  },
  methods: {
    async onRemove() {
      try {
        await this.$confirm('此操作将永久删除该部门, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        })
        await DelDeptsApi(this.treeNode.id)
        this.$message.success('删除成功')
        // this.$parent.loadDepts()
        this.$emit('remove')
      } catch (error) {}
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
