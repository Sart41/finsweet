import cx from 'classnames';
import styles from './About.module.scss'

export const About = () => {
  return (
    <section class={cx(styles.about)}>
      <div class='__container'>
        <h1 class={cx('sr-only')}>about us</h1>
        <h2 class={cx(styles.h2)}>
          <span class="line"></span>
          Know about us
        </h2>
        <div class={cx(styles.inner)}>
          <h3 class={cx(styles.h3, 'h1')}>We are a nonprofit team working worldwide</h3>
          <div class={cx(styles.body)}>
            <h4 class={cx(styles.h4)}>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</h4>
            <div class={cx(styles.description)}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Suspendisse varius enim elementum tristique.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}