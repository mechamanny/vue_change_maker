// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    changeInput: '',
    changeOutput: ''
  },
  watch: {
    change: function(newChange) {
      this.calculateChange(this.changeInput)
    }
  },
  methods: {
    calculateChange: function(newChange) {
      let denom = [100,25,10,5,1]
      let amounts = {dollars: 0, quarters: 25, dimes: 10, nickels: 5, pennies: 1}
      denom.forEach(function(ele,i) {
        denom[i] = Math.floor(newChange / ele)
        newChange = newChange % ele
      })
      let i = 0
      for (let amount in amounts) {
        amounts[amount] = denom[i]
        i ++
      }

      this.changeOutput = amounts
    }
  }
})
