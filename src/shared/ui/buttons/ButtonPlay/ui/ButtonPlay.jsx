import cx from 'classnames'
import styles from './ButtonPlay.module.scss'
import imgUrl from '/images/icons/play.svg'


export const ButtonPlay = () => {
  return (
    <button class={cx(styles.root)} type='button'>
      <img src={imgUrl} alt="" />
      <span>Play Video</span>
    </button>
  )
}