import cx from 'classnames';
import styles from './PageAbout.module.scss'

import { Header } from '../../../src/widgets/Header/'
import { Footer } from '../../../src/widgets/Footer/'
import { About } from '../sections/About/'
import { Video } from '../sections/Video/'
import { OurMission } from '../sections/OurMission/'
import { Awards } from '../sections/Awards/'
import { OurJourney } from '../sections/OurJourney/'
import { MeetOurTeam } from '../sections/MeetOurTeam/'
import { CTA } from '/src/widgets/CTA/'
import { ReadOurNews } from '/src/widgets/ReadOurNews/'
import { Events } from '/src/widgets/Events/'

export const PageAbout = () => {
  return (
    <div class={cx(styles.about, 'wrapper')}>
      <Header />
      <main>
        <About />
        <Video />
        <OurMission />
        <Awards />
        <OurJourney />
        <MeetOurTeam />
        <CTA />
        <ReadOurNews />
        <Events />
      </main>
      <Footer />
    </div>
  )
}