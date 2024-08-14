import cx from 'classnames';
import styles from './Popup.module.scss'

export const Popup = ({ id, children }) => {

  const close = () => {
    const joinPopup = document.querySelector(`#` + id);
    joinPopup.close()
    document.documentElement.style.overflow = ''
    document.documentElement.style.scrollBar = 'stable'

  }

  return (
    <dialog class={cx(styles.popup)} id={id}>
      <div class={cx(styles.btnWrapper)}>
        <button
          class={cx(styles.closeBtn)}
          onClick={close}
        ></button>
      </div>
      {children}
    </dialog>

  )
}
