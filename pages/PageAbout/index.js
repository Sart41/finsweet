export { PageAbout } from './ui/PageAbout.jsx'

import { PageAbout } from './ui/PageAbout.jsx'
import '/src/app/index.scss'

const app = document.querySelector('#app')
app.prepend(PageAbout())