export { Participation } from './ui/Participation.jsx'
import styles from './ui/Participation.module.scss'
import initTabs from './../../../../src/shared/model/Tabs/'


document.addEventListener('DOMContentLoaded', (event) => {
  const rootElement = document.querySelector('#tabsDonation');

  initTabs(rootElement, styles)

});