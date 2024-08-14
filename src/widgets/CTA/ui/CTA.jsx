import cx from 'classnames';
import styles from './CTA.module.scss'
import imgUrl from '../image/cta.jpg?format=webp'
import { Link } from '../../../shared/ui/Link/';
import { Button } from '../../../shared/ui/buttons/Button/';
import { Popup } from '../../Popup/';
import { JoinForm } from '../../JoinForm';



export const CTA = () => {

  const openModal = () => {
    const joinPopup = document.querySelector('#joinPopup');
    joinPopup.showModal()
    document.documentElement.style.overflow = 'hidden'
    document.documentElement.style.scrollbarGutter = 'stable'

  }

  return (
    <section class={cx(styles.cta)}>
      <div class='__container'>
        <div class={cx(styles.inner)} style={`--bgImg: url(${imgUrl})`}>
          <h2 class={cx('sr-only')}>CTA</h2>
          <h3 class={cx(styles.h3, 'h3')}>You can contribute to make the environment greener!</h3>
          <div class={cx(styles.actions)}>
            <Button
              mode='primary'
              text='Join as a volunteer'
              onclick={openModal}
            />
            <Link
              text='Donate'
              path='/pages/PageDonation/'
              mode='secondary'
              className={styles.link}
            />
          </div>
        </div>
      </div>
      <Popup id='joinPopup'>
        <div class={cx(styles.popupContent)}>
          <h2 class={cx(styles.h2, 'h2')}>Join as a volunteer</h2>
          <div class={cx(styles.description)}>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspen varius enim in eros elementum tristique. </p>
          </div>
          <JoinForm />
        </div>
      </Popup>
    </section >
  )
}

