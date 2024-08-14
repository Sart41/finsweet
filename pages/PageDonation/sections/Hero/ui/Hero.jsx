import cx from 'classnames';
import styles from './Hero.module.scss'
import { Subtitle } from '../../../../../src/shared/ui/subtitle';
import { Button } from '../../../../../src/shared/ui/buttons/Button';
import imgUrl from '../../../image/donation.jpg?format=webp'
import imgUrl_2x from '../../../image/donation@2x.jpg?format=webp'
import imgUrl_3x from '../../../image/donation@3x.jpg?format=webp'

export const Hero = () => {
  return (
    <section class={cx(styles.hero)}>
      <div class='__container'>
        <div class={cx(styles.inner)}>
          <div class={cx(styles.content)}>
            <Subtitle text='Donate' />
            <div class={cx(styles.body)}>
              <h3 class={cx(styles.h3, 'h3')}>Making a donation for Nature.</h3>
              <div class={styles.description}>
                <p>When you donate, you’re supporting effective solutions to big environmental challenges—an investment in the future of our planet.</p>
              </div>
              <Button
                mode='primary'
                text='Donate now'
              />
            </div>
          </div>
          <div class={cx(styles.image)}>
            <img
              src={imgUrl}
              srcset={`${imgUrl} 1x, ${imgUrl_2x} 2x`}
              alt="donation"
            />
          </div>
        </div>
      </div>
    </section>
  )
}