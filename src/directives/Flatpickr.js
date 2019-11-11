const flatpickr = () => import(/* webpackChunkName: "flatpickr" */ 'flatpickr')
const flatpickrTheme = () => import(/* webpackChunkName: "flatpickr" */ 'flatpickr/dist/themes/light.css')

export default {
  async bind (el) {
    let { default: fp } = await flatpickr()
    await flatpickrTheme()

    el._fp = fp(el, {})
  },
  unbind (el) {
    if (el._fp) {
      el._fp.destroy()
    }
  }
}
