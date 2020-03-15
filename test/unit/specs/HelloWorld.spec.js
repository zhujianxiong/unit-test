import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import {mount} from "vue-test-utils"

describe('HelloWorld.vue', () => {
  it('测试msg内容是否正确', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.hello h1').textContent)
      .to.equal('Welcome to Your Vue.js App')
  })

  it('测试changeNumber方法', () => {
    const Constructor = Vue.extend(HelloWorld)
    const vm = new Constructor().$mount()
    // expect(vm.$el.querySelector('.num').textContent)
    //   .to.equal('1239999')
    vm.changeNumber().should.eql('1239999')
  })

  it('测试点击事件方法', () => {
    // const Constructor = Vue.extend(HelloWorld)
    // const vm = new Constructor().$mount()
    // vm.$el.querySelector('.clickBtn').click()
    const wraper = mount(HelloWorld)
    const button = wraper.find('.clickBtn');
    button.trigger('click')
    assert.equal(wraper.vm.btn, '我被点击了')
  })

  it('测试DOM节点', () => {
    const wrapper = mount(HelloWorld)
    const p = wrapper.find('p');
    expect(p.is('p')).to.equal(true)
  })
})
