<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>

      <el-form-item>
        <span class="svg-container">
          <el-icon>
            <svg
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              data-v-ea893728=""
            >
              <path
                fill="currentColor"
                d="M628.736 528.896A416 416 0 0 1 928 928H96a415.872 415.872 0 0 1 299.264-399.104L512 704l116.736-175.104zM720 304a208 208 0 1 1-416 0 208 208 0 0 1 416 0z"
              ></path>
            </svg>
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" />
      </el-form-item>

      <el-form-item>
        <span class="svg-container">
          <i class="iconfont icon-pwd"></i>
        </span>
        <el-input placeholder="password" name="password" />
        <span class="show-pwd">
          <i class="iconfont icon-yincangmima"></i>
        </span>
      </el-form-item>

      <el-button type="primary" style="width: 100%; margin-bottom: 30px"
        >登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import {} from "vue";
// import LangSelect from '@/components/LangSelect/index.vue'
// import { validatePassword } from './rules'
// import { useStore } from 'vuex'
// import { useRouter } from 'vue-router'
// import { useI18n } from 'vue-i18n'

// // 数据源
// const loginForm = ref({
//   username: 'super-admin',
//   password: '123456'
// })
// // 验证规则
// const i18n = useI18n()
// const loginRules = ref({
//   username: [
//     {
//       required: true,
//       trigger: 'blur',
//       message: i18n.t('msg.login.usernameRule')
//     }
//   ],
//   password: [
//     {
//       required: true,
//       trigger: 'blur',
//       validator: validatePassword()
//     }
//   ]
// })

// // 处理密码框文本显示状态
// const passwordType = ref('password')
// const onChangePwdType = () => {
//   if (passwordType.value === 'password') {
//     passwordType.value = 'text'
//   } else {
//     passwordType.value = 'password'
//   }
// }

// // 登录动作处理
// const loading = ref(false)
// const loginFromRef = ref(null)
// const store = useStore()
// const router = useRouter()
// const handleLogin = () => {
//   loginFromRef.value.validate(valid => {
//     if (!valid) return

//     loading.value = true
//     store
//       .dispatch('user/login', loginForm.value)
//       .then(() => {
//         loading.value = false
//         // 登录后操作
//         router.push('/')
//       })
//       .catch(err => {
//         console.log(err)
//         loading.value = false
//       })
//   })
// }
</script>
<!-- <style lang="scss" scoped></style> -->
<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  min-height: 100%;
  width: 100%;
  background-color: $bg;
  overflow: hidden;

  .login-form {
    position: relative;
    width: 520px;
    max-width: 100%;
    padding: 160px 35px 0;
    margin: 0 auto;
    overflow: hidden;

    ::v-deep .el-form-item {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: rgba(0, 0, 0, 0.1);
      border-radius: 5px;
      color: #454545;
    }

    ::v-deep .el-input {
      display: inline-block;
      height: 47px;
      width: 85%;

      input {
        background: transparent;
        border: 0px;
        -webkit-appearance: none;
        border-radius: 0px;
        padding: 12px 5px 12px 15px;
        color: $light_gray;
        height: 47px;
        caret-color: $cursor;
      }
    }
  }

  .tips {
    font-size: 16px;
    line-height: 28px;
    color: #fff;
    margin-bottom: 10px;

    span {
      &:first-of-type {
        margin-right: 16px;
      }
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }

  .title-container {
    position: relative;

    .title {
      font-size: 26px;
      color: $light_gray;
      margin: 0px auto 40px auto;
      text-align: center;
      font-weight: bold;
    }

    ::v-deep .lang-select {
      position: absolute;
      top: 4px;
      right: 0;
      background-color: white;
      font-size: 22px;
      padding: 4px;
      border-radius: 4px;
      cursor: pointer;
    }
  }

  .show-pwd {
    position: absolute;
    right: 10px;
    top: 7px;
    font-size: 16px;
    color: $dark_gray;
    cursor: pointer;
    user-select: none;
  }
}
</style>
