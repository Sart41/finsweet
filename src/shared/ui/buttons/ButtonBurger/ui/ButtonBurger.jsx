import { toggledShowMenu } from '../../../Menu'
import styles from './ButtonBurger.module.scss'

import cx from 'classnames'

export const ButtonBurger = () => {
  return (
    <button
      class={cx(styles.burger)}
      aria-label="Open menu"
      aria-expanded="false"
      id='burger'
      onClick={handleOnClick}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>

  )
}

const handleOnClick = () => {
  const burgerBtn = document.querySelector('#burger');

  burgerBtn.ariaExpanded = burgerBtn.classList.contains(styles.active) ? false : true
  burgerBtn.ariaLabel = burgerBtn.classList.contains(styles.active) ? "Open menu" : "Close menu"
  document.documentElement.style.overflow = burgerBtn.classList.contains(styles.active) ? "auto" : "hidden"

  burgerBtn.classList.toggle(styles.active)

  toggledShowMenu()
}