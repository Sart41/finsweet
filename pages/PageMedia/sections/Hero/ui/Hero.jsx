import cx from 'classnames';
import styles from './Hero.module.scss'
import { Subtitle } from '../../../../../src/shared/ui/subtitle/'
import { Button } from '../../../../../src/shared/ui/buttons/Button';
import { data } from '../data/data.js'
import { BlogPost } from '../BlogPost/ui/BlogPost.jsx';

export const Hero = () => {
  return (
    <section class={cx(styles.hero)}>
      <div class='__container'>

        <div class={cx(styles.inner)}>
          <div class={cx(styles.content)}>
            <Subtitle text='Top news' />
            <div class={cx(styles.body)}>
              <h3 class={cx(styles.title, 'h2')}>Our goal is to make water available for everyone</h3>
              <div class={cx(styles.description)}>
                <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <Button
                text='Read more'
                mode='primary'
              />
            </div>
          </div>
          <div class={cx(styles.blogs)}>
            <ul>
              {data.map(row => (
                <li>
                  <BlogPost
                    img={row.img}
                    title={row.title}
                    text={row.text}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}