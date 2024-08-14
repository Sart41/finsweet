import cx from 'classnames';
import styles from './FormItem.module.scss'

export const FormItem = ({ label, children, id }) => {
  return (
    <div class={cx(styles.formItem)}>
      {label && <label class={cx(styles.label)} for={id}>{label}</label>}
      {children}
    </div>
  )
}