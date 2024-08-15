import cx from 'classnames';
import styles from './PageMain.module.scss'
import { Button } from '../../../src/shared/ui/buttons/Button'
import { Header } from '../../../src/widgets/Header'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { What } from '../sections/What/'
import { Projects } from '../../../src/widgets/Projects'
import { Stats } from '../sections/Stats'
import { CTA } from '../../../src/widgets/CTA/'
import { ReadOurNews } from '../../../src/widgets/ReadOurNews/'
import { Events } from '../../../src/widgets/Events/'
import { Footer } from '../../../src/widgets/Footer/'


export const PageMain = () => {
  return (
    <div class={cx(styles.wrapper, 'wrapper')}>
      <Header />
      <main>
        <Hero />
        <About />
        <What />
        <Projects />
        <Stats />
        <CTA />
        <ReadOurNews />
        <Events />
      </main>
      <Footer />
    </div>

  )
}