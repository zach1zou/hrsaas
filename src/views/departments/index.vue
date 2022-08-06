<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card class="box-card">
        <!-- 头部 -->
        <TreeTools
          @add="showAddDept"
          :isRoot="true"
          :treeNode="{
            name: '江苏传智播客教育科技股份有限公司',
            manager: '负责人'
          }"
        ></TreeTools>
        <!-- 树形结构 -->
        <el-tree :data="departs" :props="defaultProps" default-expand-all>
          <template v-slot="{ data }">
            <!-- 作用域插槽 v-slot获取组件内部slot提供的数据 -->
            <TreeTools
              :treeNode="data"
              @remove="loadDepts"
              @add="showAddDept"
            ></TreeTools>
          </template>
        </el-tree>
      </el-card>
    </div>
    <!-- 添加部门弹层 -->
    <AddDepts
      :visiable.sync="dialogVisible"
      :currentNode="currentNode"
    ></AddDepts>
  </div>
</template>

<script>
import { getDeptsApi } from '@/api/departments'
import TreeTools from './components/tree-tools.vue'
import { transListToTree } from '@/utils/transformtree'
import AddDepts from './components/add-depts.vue'
export default {
  data() {
    return {
      defaultProps: {
        label: 'name',
        children: 'children' //树形默认查找子节点通过children
      },
      departs: [
        { name: '总裁办', children: [{ name: '董事会' }] },
        { name: '行政部' },
        { name: '人事部' }
      ],
      dialogVisible: false,
      currentNode: {}
    }
  },
  created() {
    this.loadDepts()
  },
  methods: {
    async loadDepts() {
      const res = await getDeptsApi()

      this.departs = transListToTree(res.depts, '')
      console.log(this.departs)
    },
    showAddDept(val) {
      this.dialogVisible = true
      this.currentNode = val
    }
  },
  components: { TreeTools, AddDepts }
}
</script>

<style scoped lang="less"></style>
