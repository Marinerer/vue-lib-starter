import { defineComponent, h, PropType, computed, onMounted, onBeforeUnmount } from 'vue-demi'

export default defineComponent({
  name: 'Hello',
  props: {
    title: {
      type: String as PropType<string>,
      required: true
    }
  },
  setup(props, ctx) {
    const msg = computed(() => `Hello ${props.title} !`)

    onMounted(() => {
      console.log('onMounted ...')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount ...')
    })

    return () => h('div', [
      msg.value,
      ctx.slots.default?.()
    ])
  }
})
