import cx from 'classnames';
import styles from './Hero.module.scss'
import imgUrl from '/pages/PageWhatWeDo/assets/image/1.jpg?format=webp'
import imgUrl_2x from '/pages/PageWhatWeDo/assets/image/1@2x.jpg?format=avif&format=webp'
import { Subtitle } from '../../../../../src/shared/ui/subtitle';


export const Hero = () => {
  return (
    <section class={cx(styles.hero)}>
      <h1 class="sr-only">What we do</h1>
      <div class={cx(styles.container, '__container')}>
        <div class={cx(styles.inner)}>
          <Subtitle
            text='What we do'
          />
          <div class={cx(styles.body)}>
            <h3 class={cx(styles.title, 'h1')}>We are working worldwide</h3>
            <div class={cx(styles.description)}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
            </div>
          </div>
        </div>
        <div class={cx(styles.image)}>
          <picture>
            <source srcset={`${imgUrl} 1x, ${imgUrl_2x} 2x`} />
            <img src={imgUrl} alt="People collecting trash near the river" width={480} height={384} />
          </picture>
        </div>
      </div>
    </section>
  )
}