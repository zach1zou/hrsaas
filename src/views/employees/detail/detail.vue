<template>
  <div class="dashboard-container">
    <div class="app-container">
      <el-card>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="登录账户设置" name="account">
            <!-- 放置表单 -->
            <el-form
              label-width="120px"
              style="margin-left: 120px; margin-top: 30px"
            >
              <el-form-item label="姓名:">
                <el-input style="width: 300px" v-model="FormData.username" />
              </el-form-item>
              <el-form-item label="密码:">
                <el-input
                  style="width: 300px"
                  type="password"
                  v-model="FormData.password"
                />
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="onSave">更新</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="个人详情" name="user">
            <UserInfo></UserInfo>
          </el-tab-pane>
          <el-tab-pane label="岗位信息" name="info" />
          <jobInfo></jobInfo>
        </el-tabs>
      </el-card>
    </div>
  </div>
</template>
<script>
import { getUserDetailInfoApi, saveUserDetailById } from '@/api/user'
import UserInfo from './user-info.vue'
import jobInfo from './job-info.vue'
import jsCookie from 'js-cookie'
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
  components: { UserInfo, jobInfo },
  data() {
    return {
      FormData: {},
      activeName: jsCookie.get('employeesDetailsTab') || 'account'
    }
  },
  methods: {
    async getUserDetailInfo() {
      const res = await getUserDetailInfoApi(this.$route.params.id)
      this.FormData = res
    },
    async onSave() {
      await saveUserDetailById(this.FormData, this.$route.params.id)
      this.$message.success('更新成功')
    },
    handleClick() {
      jsCookie.set('employeesDetailsTab', this.activeName)
    }
  },
  mounted() {
    this.getUserDetailInfo()
  },
  computed: {},
  watch: {},
  updated() {},
  beforeDestroy() {},
  filters: {}
}
</script>
<style lang="less" scoped></style>
