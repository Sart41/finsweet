import { CTA } from '../../../../../../src/widgets/CTA'
import { Events } from '../../../../../../src/widgets/Events'
import { Footer } from '../../../../../../src/widgets/Footer'
import { Header } from '../../../../../../src/widgets/Header'
import { ReadOurNews } from '../../../../../../src/widgets/ReadOurNews'
import { About } from '../../../../../PageAbout/sections/About'
import { Awards } from '../../../../../PageAbout/sections/Awards'
import { MeetOurTeam } from '../../../../../PageAbout/sections/MeetOurTeam'
import { OurJourney } from '../../../../../PageAbout/sections/OurJourney'
import { OurMission } from '../../../../../PageAbout/sections/OurMission'
import { Video } from '../../../../../PageAbout/sections/Video'



export const PageAbout = () => {
  return (
    <div clas='wrapper'>
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