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
                <b-button type="submit" variant="primary">Submit</b-button>
                <b-button type="reset" variant="danger">Reset</b-button>          
            </b-form>
        </b-modal>
    </div>
</template>

<script>
export default {
    name: 'LoginModel',
    computed: {
      statePassword() {
        //   console.log('password:', this.password);
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
        return this.statePassword === true ? 'Password Ok' : ''
      }
    },
    data() {
      return {
        form: {
          email: '',
          password: ''
        },
        show: true
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        alert(JSON.stringify(this.form))
      },
      onReset(evt) {
        evt.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.password = ''
        // Trick to reset/clear native browser form validation state
        // this.show = false
        // this.$nextTick(() => {
        //   this.show = true
        // })
      }
    }
}
</script>

<style scoped>

</style>