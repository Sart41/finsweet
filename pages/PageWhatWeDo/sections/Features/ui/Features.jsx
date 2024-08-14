import cx from 'classnames';
import styles from './Features.module.scss'
import { data } from '../data/data.jsx'
import { Feature } from '../components/Feature';

export const Features = () => {
  return (
    <section class={cx(styles.features)}>
      <div class='__container'>
        <div class={cx(styles.inner)}>
          <h2 class={cx(styles.title, 'h2')}>What we do for the environment</h2>
          <ul>
            {data.map(row => (
              <li>
                <Feature
                  title={row.title}
                  text={row.text}
                  icon={row.icon}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}