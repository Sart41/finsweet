import cx from 'classnames';
import styles from './Awards.module.scss'
import { AwardItem } from '../componets/AwardItem/ui/AwardItem';
import { data } from '../data/data.js'

export const Awards = () => {
  return (
    <section class={cx(styles.awards)}>
      <div class='__container __container--small'>
        <h2 class={cx(styles.title,)}>Awards & Recognitions</h2>
        <ul class={cx()}>
          {data.map(row => (
            <li>
              <AwardItem
                date={row.date}
                title={row.title}
                location={row.location}
                img={row.img}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}