import cx from 'classnames';
import styles from './AwardItem.module.scss'
import imgUrl from '/images/icons/award.svg'

export const AwardItem = (props) => {
  const { date, title, location, img } = props
  const iconUrl = '/images/icons/'
  return (
    <div class={cx(styles.awarditem)}>
      <div class={cx(styles.image)}>
        <img width="112" height="92" src={imgUrl} alt="" />
        <img class={cx(styles.icon)} src={`${iconUrl}${img}`} alt="" />
      </div>
      <div class={cx(styles.body)}>
        <h3 class={cx(styles.date)}><time>{date}</time></h3>
        <h4 class={cx(styles.title)}>{title}</h4>
        <span class={cx(styles.location)}>{location}</span>
      </div>
    </div>
  )
} 