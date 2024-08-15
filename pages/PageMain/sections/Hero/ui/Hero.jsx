import cx from 'classnames'
import styles from './Hero.module.scss'
import imgUrl from '../../../image/bg-hero.jpg?format=webp'
import { ButtonPlay } from '../../../../../src/shared/ui/buttons/ButtonPlay';
import { Link } from '../../../../../src/shared/ui/Link/';

export const Hero = () => {
  return (
    <section class={cx(styles.hero)} style={`--bgImg: url(${imgUrl})`}>
      <div class={cx('__container')}>
        <div class={cx(styles.content)}>
          <div class={cx(styles.title)}>
            <h1 class={styles.h1}>Save the environment today for a better tomorrow</h1>
          </div>
          <div class={cx(styles.actions)}>
            <Link
              text='What we do'
              mode='secondary'
              path='/finsweet/pages/PageWhatWeDo/'
            />
            <ButtonPlay />
          </div>
          <div class={cx(styles.info)}>
            <div class={cx(styles.infoLeft)}>
              <span>23.800</span> trees planted
            </div>
            <div class={cx(styles.infoCenter)}></div>
            <div class={cx(styles.infoRight)}>
              <span>5840</span> donations collected
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}