<template>
  <el-dialog
    title="分配角色"
    :visible="showRoleDialog"
    @close="handleClose"
    @open="getRoleList"
  >
    <!-- el-checkbox-group选中的是 当前用户所拥有的角色  需要绑定 当前用户拥有的角色-->
    <!-- 分配角色 -->
    <el-checkbox-group v-model="roleIds">
      <el-checkbox v-for="item in list" :key="item.id" :label="item.id">
        {{ item.name }}
      </el-checkbox>
    </el-checkbox-group>
    <el-row slot="footer" type="flex" justify="center">
      <el-col :span="6">
        <el-button type="primary" size="small" @click="onSave">确定</el-button>
        <el-button size="small" @click="onCancel">取消</el-button>
      </el-col>
    </el-row>
  </el-dialog>
</template>
<script>
import { getUserDetailInfoApi } from '@/api/user'
import { getRoleApi, assignRoles } from '@/api/role'
export default {
  props: {
    showRoleDialog: {
      type: Boolean,
      default: () => false
    },
    // 用户的id 用来查询当前用户的角色信息
    userId: {
      type: String,
      default: null
    }
  },
  components: {},
  data() {
    return {
      list: [], // 角色列表
      roleIds: []
    }
  },
  methods: {
    onCancel() {
      this.$emit('onCancel')
    },
    handleClose() {
      this.$emit('handleClose')
    },
    // 分配角色
    async onSave() {
      if (this.roleIds.length > 0) {
        await assignRoles({
          id: this.userId,
          roleIds: this.roleIds
        })
        this.$message.success('分配成功')
        this.$emit('onSave')
      } else {
        this.$message.error('请选择角色')
      }
    },
    async getRoleList() {
      const { rows } = await getRoleApi()
      this.list = rows
      const { roleIds } = await getUserDetailInfoApi(this.userId)
      this.roleIds = roleIds
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
