import cx from 'classnames';
import styles from './Participation.module.scss'

export const Participation = () => {
  return (
    <section class={cx(styles.participation)}>
      <div class='__container'>
        <div class={cx(styles.inner)}>
          <div class={cx(styles.body)}>
            <h2 class={cx('h2')}>How you can contribute to protect Earth</h2>
            <div class={cx(styles.description)}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
          </div>
          <div class={cx(styles.tabs)} id='tabsDonation'>
            <div class={cx(styles.buttons)} role="tablist" aria-labelledby="tabs-title">
              <button
                class={cx(styles.tabsButton, styles.isActive)}
                id='tab-1'
                type='button'
                role='tab'
                aria-controls='tabpanel-1'
                aria-selected='true'
              >
                Overview
              </button>
              <button
                class={cx(styles.tabsButton)}
                id='tab-2'
                type='button'
                role='tab'
                aria-controls='tabpanel-2'
                aria-selected='false'
                tabIndex='-1'
              >
                Impact
              </button>
              <button
                class={cx(styles.tabsButton)}
                id='tab-3'
                type='button'
                role='tab'
                aria-controls='tabpanel-3'
                aria-selected='false'
                tabIndex='-1'
              >
                What You get
              </button>
            </div>
            <div
              class={cx(styles.tabsContent, styles.isActive)}
              id='tabpanel-1'
              role='tabpanel'
              aria-labelledby='tab-1'
              tabindex='0'
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.

                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div
              class={cx(styles.tabsContent)}
              id='tabpanel-2'
              role='tabpanel'
              aria-labelledby='tab-2'
              tabindex='0'
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.

                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
            </div>
            <div
              class={cx(styles.tabsContent)}
              id='tabpanel-3'
              role='tabpanel'
              aria-labelledby='tab-3'
              tabindex='0'
            >
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.

                Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, enim molestias nulla, ipsam officia facere illo nam reprehenderit debitis mollitia saepe quisquam possimus ut ratione totam. Facere et ipsum possimus.</p>
            </div>
          </div>
        </div>
        <hr />
        <div class={cx(styles.impact)}>
          <h2 class={cx('h2')}>How we use your donation</h2>
          <div class={cx(styles.text)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.  Nunc ut sem vitae risus tristique posuere.</p>
            <p>Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}