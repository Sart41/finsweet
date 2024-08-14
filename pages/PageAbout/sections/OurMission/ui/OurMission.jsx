import cx from 'classnames';
import styles from './OurMission.module.scss'
import { Supporters } from '../../../../../src/shared/ui/Supporters';

export const OurMission = () => {
  return (
    <section class={cx(styles.ourmission)}>
      <div class={cx(styles.wrapper, '__container')}>
        <div class={cx(styles.container, '__container', ' __container--small')}>
          <div class={cx(styles.item)}>
            <h2 class={cx(styles.subtitle)}>our mission</h2>
            <h3 class={cx(styles.title, 'h3')}>We make the world we save our own environment</h3>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
          </div>
          <div class={cx(styles.item)}>
            <h2 class={cx(styles.subtitle)}>our Vision</h2>
            <h3 class={cx(styles.title, 'h3')}>Plant more trees to make world air pollution free</h3>
            <div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
          </div>
        </div>
        <Supporters />
      </div>
    </section>
  )
}