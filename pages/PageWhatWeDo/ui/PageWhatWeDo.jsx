import { Footer } from '../../../src/widgets/Footer'
import { Header } from '../../../src/widgets/Header'
import { Features } from '../sections/Features'
import { Hero } from '../sections/Hero'
import { Projects } from '../../../src/widgets/Projects/'
import { CTA } from '../../../src/widgets/CTA/'
import { ReadOurNews } from '../../../src/widgets/ReadOurNews/'
import { Events } from '../../../src/widgets/Events/'

export const PageWhatWeDo = () => {
  return (
    <div class="wrapper">
      <Header />
      <main>
        <Hero />
        <Features />
        <Projects />
        <CTA />
        <ReadOurNews />
        <Events />
      </main>
      <Footer />
    </div>
  )
}