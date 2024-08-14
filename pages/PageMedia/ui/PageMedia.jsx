import cx from 'classnames';
import styles from './PageMedia.module.scss'
import { Header } from '../../../src/widgets/Header/';
import { Footer } from '../../../src/widgets/Footer/';
import { Hero } from '../sections/Hero/';
import { ReadOurNews } from '../../../src/widgets/ReadOurNews/'
import { Events } from '../../../src/widgets/Events/'

export const PageMedia = () => {
  return (
    <div class={cx(styles.pagemedia, 'wrapper')}>
      <Header />
      <main>
        <Hero />
        <ReadOurNews />
        <Events />
      </main>
      <Footer />
    </div>
  )
}