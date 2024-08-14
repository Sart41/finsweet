import cx from 'classnames';
import styles from './subtitle.module.scss'

export const Subtitle = ({ text }) => {
  return (
    <h2 class={cx(styles.subtitle)}>
      <span class='line'></span>
      {text}
    </h2>
  )
}