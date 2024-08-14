import cx from 'classnames'
import styles from './Button.module.scss'


export const Button = ({ text, mode, className, onclick, type = 'button' }) => {
  return (
    <button
      ontouchstart=""
      class={cx(styles.button, styles[mode], styles[className])}
      type={type}
      onClick={onclick}
    >
      {text}
    </button >
  )
}