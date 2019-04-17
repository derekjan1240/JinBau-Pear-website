<template>
    <div>
        <b-modal id="login-modal" title="會員管理" ok-only ok-title='Cancel'>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show">
                <b-form-group
                  id="account-id"
                  label="帳號"
                  label-for="email"
                >
                  <b-form-input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    placeholder="請輸入電子郵件"
                  ></b-form-input>
                </b-form-group>

                <b-form-group 
                  id="account-password" 
                  label="密碼" 
                  label-for="password"
                  :invalid-feedback="invalidFeedbackPassword"
                  :valid-feedback="validFeedbackPassword"
                  :state="statePassword"
                >
                  <b-form-input
                    id="password"
                    v-model="form.password"
                    type="password"
                    :state="statePassword"
                    required
                    placeholder="請輸入密碼"
                  ></b-form-input>
                </b-form-group>  
                <b-form-group 
                  id="account-captcha" 
                  label="驗證碼" 
                  label-for="captcha"
                  :invalid-feedback="invalidFeedbackCaptcha"
                  :valid-feedback="validFeedbackCaptcha"
                  :state="stateCaptcha"
                >
                  <b-row>
                    <b-col sm="4">
                      <!-- captcha img -->
                      <div class="thumbnail" title="点击图片重新获取验证码" @click="getCaptcha">
                        <div class="captcha" v-html="captchaTpl"></div>
                      </div>
                    </b-col>
                    <b-col sm="8">
                      <!-- captcha input -->
                      <b-form-input
                      id="captcha"
                      v-model="form.captcha"
                      type="text"
                      :state="stateCaptcha"
                      required
                      placeholder="請輸入驗證碼"
                      ></b-form-input>
                    </b-col>
                  </b-row>
                </b-form-group>  
                <div id="form-btn-group" class="pt-5 pb-3" style="text-align: center;">
                  <b-button type="submit" variant="success" class="mr-3">註冊</b-button>
                  <b-button type="submit" variant="primary" class="mr-3">登入</b-button>
                  <b-button type="reset" variant="danger">清除</b-button> 
                </div>
                   
            </b-form>
        </b-modal>
    </div>
</template>

<script>
import createCaptcha from '@/utils/createCaptcha'
export default {
    name: 'LoginModel',
    computed: {
      //password
      statePassword() {
        return this.form.password.length >= 6 ? true : false
      },
      invalidFeedbackPassword() {
        if (this.form.password.length > 6) {
          return ''
        } else if (this.form.password.length > 0) {
          return 'Enter at least 6 characters'
        } else {
          return 'Please enter something'
        }
      },
      validFeedbackPassword() {
        return this.statePassword === true ? 'Password Format Ok' : ''
      },

      //captcha
      stateCaptcha() {
        return this.form.captcha.length === 6 ? true : false
      },
      invalidFeedbackCaptcha() {
        return 'Please enter 6 characters'
      },
      validFeedbackCaptcha() {
        return this.stateCaptcha === true ? 'Captcha Format Ok' : ''
      }
    },
    data() {
      return {
        form: {
          email: '',
          password: '',
          captcha:''
        },
        show: true,
        captchaTpl: '' // 验证码模板
      }
    },
    created() {
      this.getCaptcha();
    },
    methods: {
      // form
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        this.form.captcha = ''
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      //captcha
      getCaptcha() {
        const { tpl, captcha } = createCaptcha()

        this.captchaTpl = tpl
        this.localCaptcha = captcha
      }

    }
}
</script>
  
<style scoped>
  .thumbnail { 
    text-align: center;
    cursor: pointer;
  }
  .thumbnail .captcha { 
    background: #E1E6E8;
  }
  .captcha { font-size: 24px; font-weight: bold; user-select: none;}
</style>