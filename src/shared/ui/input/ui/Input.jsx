import cx from 'classnames';
import styles from './input.module.scss'

export const Input = (props) => {
  const { id, label = '', name, value = '', type, placeholder, customClass } = props

  return (
    <div class={cx(styles.formItem, customClass)}>
      <label
        class={cx(styles.label)}
        for={id}
      >
        {label}
      </label>
      <input
        class={cx(styles.input)}
        type={type}
        id={id}
        name={name}
        placeholder={placeholder}
      />
    </div>
  )
}