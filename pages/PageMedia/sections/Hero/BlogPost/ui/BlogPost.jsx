import cx from 'classnames';
import styles from './BlogPost.module.scss'

const imgUrl = '/pages/PageMedia/image/'

export const BlogPost = ({ title, text, img }) => {
  return (
    <article class={cx(styles.blogpost)}>
      <a class={cx(styles.card)} href='#!'>
        <div class={cx(styles.image)}>
          <img
            // srcset={`${img} 1x`}
            src={img} alt="" width={192} height={160} />
        </div>
        <div class={cx(styles.content)}>
          <h4 class={cx(styles.title)}>{title}</h4>
          <div class={cx(styles.text)}>
            {text}
          </div>
        </div>
      </a>
    </article>
  )
}