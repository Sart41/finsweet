import cx from 'classnames';
import styles from './Feature.module.scss'

export const Feature = (props) => {
  const { title, text, icon } = props
  return (
    <div class={cx(styles.feature)}>
      <div class={cx(styles.icon)}>
        {icon}
      </div>
      <div class={cx(styles.body)}>
        <h3 class={cx(styles.title)}>{title}</h3>
        <div class={cx(styles.description)}>
          {text}
        </div>
      </div>
    </div>
  )
}