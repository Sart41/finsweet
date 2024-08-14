import cx from 'classnames';
import styles from './Map.module.scss'

export const Map = () => {
  return (
    <iframe class={cx(styles.map)} src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d46892.917247259975!2d-71.47668165286025!3d42.728968616940634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s8%20Brewery%20Drive%2C%20Hudson%2C%20NH%2003051%2C%20USA!5e0!3m2!1sru!2sde!4v1723557520068!5m2!1sru!2sde" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  )
}