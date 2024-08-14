import cx from 'classnames';
import styles from './PageContacts.module.scss'
import { Header } from '../../../src/widgets/Header/'
import { Footer } from '../../../src/widgets/Footer/'
import { Hero } from '../sections/Hero/';
import { JoinForm } from './../../../src/widgets/JoinForm/';
import { Map } from '../sections/Map/';


export const PageContacts = () => {
  return (
    <div class={cx(styles.pagecontacts, 'wrapper')}>
      <Header />
      <main>
        <Hero />
        <JoinForm />
        <Map />
      </main>
      <Footer />
    </div>
  )
}