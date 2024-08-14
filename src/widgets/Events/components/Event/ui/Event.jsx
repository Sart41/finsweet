import cx from 'classnames';
import styles from './Event.module.scss'
// import getData from '../model/getDate.js'

import { EventButton } from '../../EventButton/ui/EventButton';

export const Event = (props) => {
  const { date, text } = props
  const [day, month, year = new Date().getFullYear()] = date.split('.');
  // const dateObj = new Date(`${year}-${month}-${day}`)
  const dateObj = new Date(year, month, day)

  const formatedDate = dateObj.toISOString().split('T')[0]
  const monthStr = dateObj.toLocaleString('en-En', { month: 'short' })

  return (
    <div class={cx(styles.event)} >
      <a class={cx(styles.inner)} href='#'>
        <time datetime={`${formatedDate}`}>{day} <span>{monthStr}</span></time>
        <div class={cx(styles.body)}>
          <div class={cx(styles.subtitle)}> <span>next events</span></div>
          <h2 class={cx(styles.title, 'h3')}>{text}</h2>
        </div>
        <EventButton />
      </a>
    </div>
  )
}