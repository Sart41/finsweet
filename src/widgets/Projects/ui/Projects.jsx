import cx from 'classnames'
import styles from './Projects.module.scss'
import { Project } from '../../../shared/ui/Project/ui/Project'
import imgUrl from '../image/project-1.jpg?format=webp'
import imgUrl_2x from '../image/project-1@2x.jpg?format=webp'
import imgUrl_2 from '../image/project-2.jpg?format=webp'
import imgUrl_2_2x from '../image/project-2@2x.jpg?format=webp'
import imgUrl_3 from '../image/project-3.jpg?format=webp'
import imgUrl_3_2x from '../image/project-3@2x.jpg?format=webp'
import { Subtitle } from '../../../shared/ui/subtitle'


export const Projects = () => {
  return (
    <section class={cx(styles.projects)}>
      <div class='__container'>
        <div class={cx(styles.inner)}>
          <Subtitle text='Projects we have done' />
          <h3 class={cx('h2', styles.h3)}>We are Creating sustainable society, for everyone and forever.</h3>
          <ul class={cx(styles.list)}>
            <li>
              <Project
                imgUrl={imgUrl}
                imgUrl_2x={imgUrl_2x}
                title='Mission 40K: Tree plantation'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
              />
            </li>
            <li>
              <Project
                imgUrl={imgUrl_2}
                imgUrl_2x={imgUrl_2_2x}
                title='Weekly cleanliness program in city'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
              />
            </li>
            <li>
              <Project
                imgUrl={imgUrl_3}
                imgUrl_2x={imgUrl_3_2x}
                title='Wildlife safety program 2021'
                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.'
              />
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}