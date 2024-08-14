import cx from 'classnames';
import styles from './OurJourney.module.scss'
import imgUrl from '../../../image/1.jpg?format=webp'
import imgUrl_2x from '../../../image/1@2x.jpg?format=webp'

export const OurJourney = () => {
  return (
    <section class={cx(styles.ourjourney)}>
      <div class='__container'>
        <div class={cx(styles.inner)}>
          <div class={cx(styles.body)}>
            <h2 class={cx(styles.subtitle)}>OUR JOURNEY </h2>
            <h3 class={cx(styles.title, 'h2')}>How we raised 34M</h3>
            <div class={cx(styles.description)}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh.</p>
            </div>
            <div class={cx(styles.stats)}>
              <div class={cx(styles.statsItem)}>
                <span>34M+</span>
                <p>Donation Received</p>
              </div>
              <div class={cx(styles.statsItem)}>
                <span>400+</span>
                <p>Volunters</p>
              </div>
              <div class={cx(styles.statsItem)}>
                <span>40K+</span>
                <p>Trees planted</p>
              </div>
            </div>
          </div>
          <div class={cx(styles.image)}>
            <img
              srcset={`${imgUrl} 1x, ${imgUrl_2x} 2x`}
              width={648} height={448} src={imgUrl}
              alt="group of smiling people" />
          </div>
        </div>
      </div>
    </section>
  )
}