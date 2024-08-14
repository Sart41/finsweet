import cx from 'classnames';
import styles from './PageDonation.module.scss'
import { Header } from '../../../src/widgets/Header/';
import { Footer } from '../../../src/widgets/Footer/';
import { CTA } from './../../../src/widgets/CTA/'
import { Hero } from './../sections/Hero/';
import { Participation } from './../sections/Participation/';


export const PageDonation = () => {
  return (
    <div class={cx(styles.pagedonation, 'wrapper')}>
      <Header />
      <main>
        <Hero />
        <Participation />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}