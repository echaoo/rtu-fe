/**
 * Created by lhy95 on 2017/2/26.
 */
import Vue from 'vue'
import Footer from 'src/components/index/RtuFooter'

describe('Index.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Footer)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.footer-container p').textContent)
      .to.equal('Copyright © 2016 - 2017 山东创新石油技术有限公司 All rights reserved.')
  })
})
