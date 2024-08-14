import cx from 'classnames';
import styles from './EventButton.module.scss'

export const EventButton = ({ path }) => {
  return (
    <a class={cx(styles.root)} href={path}>
      <svg class={cx(styles.arrow)} width="19" height="16" viewBox="0 0 19 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.4571 8.70711C18.8476 8.31658 18.8476 7.68342 18.4571 7.29289L12.0931 0.928933C11.7026 0.538409 11.0695 0.538409 10.6789 0.928933C10.2884 1.31946 10.2884 1.95262 10.6789 2.34315L16.3358 8L10.6789 13.6569C10.2884 14.0474 10.2884 14.6805 10.6789 15.0711C11.0695 15.4616 11.7026 15.4616 12.0931 15.0711L18.4571 8.70711ZM0.25 9L17.75 9L17.75 7L0.25 7L0.25 9Z" fill="#1D2130" />
      </svg>
    </a>
  )
}