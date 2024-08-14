import cx from 'classnames';
import styles from './Video.module.scss'
import imgUrl from '../../../image/bg.jpg?format=webp'

export const Video = () => {
  return (
    <section class={cx(styles.video)}>
      <div class='__container'>
        <h2 class={cx('sr-only')}>video about us</h2>
        <div class={cx(styles.body)}>
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </section>
  )
}