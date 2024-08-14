export { Popup } from './ui/Popup.jsx'

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('dialog')

  if (items.length) {
    items.forEach(item => {
      item.addEventListener('cancel', () => {
        closeModal()
      })
      item.addEventListener('click', ({ currentTarget, target }) => {
        if (target === currentTarget) {
          item.close()
          closeModal()
        }
      })
    })
  }
  const closeModal = () => {
    document.documentElement.style.overflow = ''
    document.documentElement.style.scrollBar = 'stable'
  }
})