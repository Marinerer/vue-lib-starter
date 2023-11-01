import { defineComponent, PropType, h, computed, onMounted, onBeforeMount } from 'vue-demi'
import Hello from './Hello'

export default defineComponent({
  name: 'Hello',
  props: {
    title: String as PropType<string>
  },
  setup(props, context) {
    let hi: Hello | null = null

    onMounted(() => {
      console.log('mounted ...')
      hi = new Hello('vue')
      hi.sayHi()
    })
    onBeforeMount(() => {
      console.log('before mounted ...')
      hi = null
    })
    const msg = computed(() => {
      return `Hello ${props.title} !`
    })

    return () => h('div', [
      msg.value,
      context.slots.default && context.slots.default()
    ])
  }
})
