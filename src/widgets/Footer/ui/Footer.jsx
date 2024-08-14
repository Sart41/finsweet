import cx from 'classnames'
import styles from './Footer.module.scss'
import imgUrl from '/images/icons/logo-white.svg'
import { ButtonSubmit } from '../../../shared/ui/buttons/ButtonSubmit/'
import { FormItem } from '../../../shared/ui/FormItem'

export const Footer = () => {
  const Input = (props) => {
    return (
      <input class={cx(styles.input)} {...props} />
    )
  }

  return (
    <footer class={cx(styles.footer)}>
      <div class="__container">
        <div class={cx(styles.inner)}>
          <a class={cx(styles.logo)} href="/">
            <img src={imgUrl} alt="logo" />
          </a>
          <nav>
            <div class={cx(styles.navItem)}>
              <span>Our team</span>
              <ul>
                <li><a href="#!">About us</a></li>
                <li><a href="#!">Team</a></li>
                <li><a href="#!">What we do</a></li>
                <li><a href="#!">Contact</a></li>
              </ul>
            </div>
            <div class={cx(styles.navItem)}>
              <span>More</span>
              <ul>
                <li><a href="#!">Projects</a></li>
                <li><a href="#!">Events</a></li>
                <li><a href="#!">Donate</a></li>
                <li><a href="#!">Blog</a></li>
              </ul>
            </div>
            <div class={cx(styles.navItem)}>
              <span>Connect</span>
              <ul>
                <li><a href="#!">Facebook</a></li>
                <li><a href="#!">Instagram</a></li>
                <li><a href="#!">Twitter</a></li>
                <li><a href="#!">Linkdin </a></li>
              </ul>
            </div>
          </nav>
          <form action="#">
            <h3 class={cx(styles.title, 'h3')}>Subscribe to get latest updates</h3>
            <div class={cx(styles.formItem)}>
              <label class={cx('sr-only')} for="footer-email">Email</label>
              <Input
                name='footer-email'
                id='footer-email'
                type='email'
                placeholder='Your email'
                required
                pattern="^([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x22([^\x0d\x22\x5c\x80-\xff]|\x5c[\x00-\x7f])*\x22))*\x40([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d)(\x2e([^\x00-\x20\x22\x28\x29\x2c\x2e\x3a-\x3c\x3e\x40\x5b-\x5d\x7f-\xff]+|\x5b([^\x0d\x5b-\x5d\x80-\xff]|\x5c[\x00-\x7f])*\x5d))*(\.\w{2,})+$"
              />
              <ButtonSubmit text="Subscribe" />
            </div>
          </form>
        </div>
      </div>
    </footer>
  )
}
