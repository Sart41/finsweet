import cx from 'classnames';
import styles from './Link.module.scss'

export const Link = (props) => {
  const { path, text, mode, className } = props
  return (
    <a
      class={cx(styles.link, styles[mode], className)}
      href={path}
    >
      {text}
    </a>
  )
}