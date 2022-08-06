<template>
  <div>
    <el-dialog
      title="添加部门"
      :visible="visiable"
      width="50%"
      @close="handleClose"
    >
      <el-form
        ref="form"
        :model="formData"
        :rules="formRules"
        label-width="100px"
      >
        <el-form-item label="部门名称" prop="name">
          <el-input
            placeholder="输入部门名称"
            v-model="formData.name"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门编码" prop="code">
          <el-input
            placeholder="输入部门编码"
            v-model="formData.code"
          ></el-input>
        </el-form-item>
        <el-form-item label="部门负责人" prop="manager">
          <el-select
            placeholder="请选择部门负责人"
            style="width: 100%"
            v-model="formData.manager"
          >
            <el-option
              :label="item.username"
              :value="item.username"
              v-for="item in EmployList"
              :key="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="部门介绍" prop="introduce">
          <el-input
            placeholder="输入部门介绍"
            type="textarea"
            v-model="formData.introduce"
          ></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="handleClose">取 消</el-button>
        <el-button type="primary" @click="onSave">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { getDeptsApi, addDeptsApi } from '@/api/departments'
import { getEmployApi } from '@/api/employess'
export default {
  props: {
    visiable: {
      type: Boolean
    },
    currentNode: {
      type: Object,
      default: () => {}
    }
  },
  components: {},
  data() {
    return {
      EmployList: [],
      formData: {
        name: '',
        code: '',
        manager: '',
        introduce: '',
        pid: ''
      },
      formRules: {
        name: [
          { required: true, message: '请输入部门名称', trigger: 'blur' },
          {
            validator: async (rule, value, callback) => {
              if (!this.currentNode.children) return callback()
              const isRepeat = this.currentNode.children.some(
                (item) => item.name === value
              )
              isRepeat ? callback(new Error('部门重复')) : callback()
            },
            trigger: 'blur'
          }
        ],
        code: [
          { required: true, message: '请输入部门编码', trigger: 'blur' },
          {
            validator: async (rule, value, callback) => {
              const { depts } = await getDeptsApi()
              const isRepeat = depts.some((item) => item.code === value)
              isRepeat ? callback(new Error('部门编码重复')) : callback()
            },
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    handleClose() {
      this.$parent.dialogVisible = false
      // this.$emit('update:visiable', false)
    },
    async onSave() {
      await this.$refs.form.validate()
      this.formData.pid = this.currentNode.id
      // console.log(this.formData)
      try {
        await addDeptsApi(this.formData)
        this.$parent.loadDepts()
        this.$message.success('添加成功')
        // this.$emit('update:visiable', false)
      } catch (error) {
        this.$message.fail(error)
      } finally {
        this.$parent.dialogVisible = false
      }
    },
    async getEmployList() {
      const res = await getEmployApi()
      this.EmployList = res
    }
  },
  mounted() {
    this.getEmployList()
  },
  computed: {},
  watch: {},
  updated() {},
  beforeDestroy() {},
  filters: {}
}
</script>
<style lang="less" scoped></style>
