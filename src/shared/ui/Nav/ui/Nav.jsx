import { Menu } from '../../Menu'
import { Button } from '../../buttons/Button'
import { ButtonBurger } from '../../buttons/ButtonBurger'
import { Link } from '../../Link/'
import styles from './Nav.module.scss'
import cx from 'classnames'

export const Nav = () => {
  return (
    <nav class={cx(styles.nav)}>
      <Menu />
      <Link text='Donate' path='/pages/PageDonation/' className={styles.link} />
      <ButtonBurger />
    </nav>
  )
}