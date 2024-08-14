import cx from 'classnames'
import styles from './About.module.scss'
import imgUrl from '../assets/image/about-1.jpg?w=1300&format=webp'
import img2xUrl from '../assets/image/about-1@2x.jpg?format=webp'
import { Link } from '../../../../../src/shared/ui/Link'
import { Supporters } from '../../../../../src/shared/ui/Supporters/'
import { Subtitle } from '../../../../../src/shared/ui/subtitle'


export const About = () => {
  return (
    <section class={cx(styles.root)}>
      <div class={"__container"}>
        <div class={styles.inner}>
          <div class={styles.content}>
            <Subtitle text='Know About us' />
            <div class={cx(styles.body)}>
              <h3 class={cx(styles.h3, 'h3')}>We help nature smile and survive everywhere</h3>
              <div class={styles.description}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <p>‍Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              </div>
              <Link
                mode='primary'
                text="Learn more"
                path='#!'
              />
            </div>
          </div>
          <div class={cx(styles.image)}>
            <img
              src={imgUrl}
              srcset={`${imgUrl} 1x, ${img2xUrl} 2x`}
              alt="children in a park"
              width={480}
              height={579}
              loading="lazy"
            />
          </div>
        </div>
        <Supporters />
      </div>
    </section>
  )
}