class Tabs {

  stateAttributes = {
    ariaSelected: 'aria-selected',
    tabIndex: 'tabindex',
  }

  constructor(rootElement, styles) {
    this.rootElement = rootElement
    this.styles = styles

    this.selectors = {
      button: `.${styles.tabsButton}`,
      content: `.${styles.tabsContent}`,
    }

    this.stateClasses = {
      isActive: styles.isActive,
    }

    this.buttonElements = this.rootElement.querySelectorAll(this.selectors.button)
    this.contentElements = this.rootElement.querySelectorAll(this.selectors.content)
    this.state = this.getProxyState({
      activeTabIndex: [...this.buttonElements]
        .findIndex((buttonElement) => buttonElement.classList.contains(this.stateClasses.isActive)),
    })
    this.limitTabsIndex = this.buttonElements.length - 1
    this.bindEvents()
  }

  getProxyState(initialState) {
    return new Proxy(initialState, {
      get: (target, prop) => target[prop],
      set: (target, prop, value) => {
        target[prop] = value

        this.updateUI()

        return true
      },
    })
  }

  updateUI() {
    const { activeTabIndex } = this.state

    this.buttonElements.forEach((buttonElement, index) => {
      const isActive = index === activeTabIndex

      buttonElement.classList.toggle(this.stateClasses.isActive, isActive)
      buttonElement.setAttribute(this.stateAttributes.ariaSelected, isActive.toString())
      buttonElement.setAttribute(this.stateAttributes.tabIndex, isActive ? '0' : '-1')
    })

    this.contentElements.forEach((contentElement, index) => {
      contentElement.classList.toggle(this.stateClasses.isActive, index === activeTabIndex)
    })
  }

  previousTab = () => {
    const newTabIndex = (this.state.activeTabIndex - 1 + this.buttonElements.length) % this.buttonElements.length
    this.state.activeTabIndex = newTabIndex
    this.buttonElements[newTabIndex].focus()
  }

  nextTab = () => {
    const newTabIndex = (this.state.activeTabIndex + 1) % this.buttonElements.length
    this.state.activeTabIndex = newTabIndex
    this.buttonElements[newTabIndex].focus()
  }

  firstTab = (event) => {
    event.preventDefault()
    const newTabIndex = 0

    this.state.activeTabIndex = newTabIndex
    this.buttonElements[newTabIndex].focus()
  }

  lastTab = (event) => {
    event.preventDefault()

    const newTabIndex = this.limitTabsIndex

    this.state.activeTabIndex = newTabIndex
    this.buttonElements[newTabIndex].focus()
  }

  onKeyDown(event) {
    const { code, metaKey, key } = event
    const action = {
      ArrowLeft: this.previousTab,
      ArrowRight: this.nextTab,
      Home: () => this.firstTab(event),
      End: () => this.lastTab(event),
    }[key]

    const isMacHomeKey = metaKey && code === 'ArrowLeft'
    if (isMacHomeKey) {
      this.firstTab()
      return
    }

    const isMacEndKey = metaKey && code === 'ArrowRight'
    if (isMacEndKey) {
      this.lastTab()
      return
    }

    action?.()
  }

  bindEvents() {
    this.buttonElements.forEach((buttonElement, index) => {
      buttonElement.addEventListener('click', () => {
        this.state.activeTabIndex = index
      })
    })

    this.rootElement.addEventListener('keydown', (event) => this.onKeyDown(event))
  }
}

// const initTabs = () => {
//   const tabsElements = document.querySelectorAll(tabsRootSelector)
//   tabsElements.forEach((tabsElement) => {

//     new Tabs(tabsElement)
//   })
// }


const initTabs = (rootElement, styles) => {
  new Tabs(rootElement, styles)
}
export default initTabs