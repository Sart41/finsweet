import cx from 'classnames';
import styles from './NewsItem.module.scss'

export const NewsItem = ({ data }) => {
  const { title, imgUrl, alt, text, path } = data
  return (
    <article class={cx(styles.root)}>
      <a href={path} onTouchStart=''>
        <div class={cx(styles.img)}>
          <img
            srcset={imgUrl}
            src={imgUrl}
            alt={alt}
            width={320}
            height={192}
          />
        </div>
        <h4 class={cx(styles.title)}>{title}</h4>
        <div class={cx(styles.description)}><p>{text}</p></div>
      </a>
    </article>
  )
}