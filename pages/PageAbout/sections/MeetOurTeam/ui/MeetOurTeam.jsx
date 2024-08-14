import cx from 'classnames';
import styles from './MeetOurTeam.module.scss'
import { data } from '../data/data.js'
import { Member } from '../Member';

export const MeetOurTeam = () => {
  return (
    <section class={cx(styles.meetourteam)}>
      <div class='__container'>
        <h2 class={cx(styles.title, 'h2')}>Meet our team</h2>
        <div class={cx(styles.description)}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        </div>
        <ul class={cx(styles.team)}>
          {data.map(row => (
            <li>
              <Member
                name={row.name}
                occupation={row.occupation}
                img={row.img}
                img_2x={row.img_2x}
                fbLink={row.fbLink}
                xLink={row.xLink}
                inLink={row.inLink}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}