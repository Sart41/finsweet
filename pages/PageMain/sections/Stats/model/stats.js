const viewportHeight = window.innerHeight
let circleElement;
let marker;

const statsInit = () => {
  circleElement = document.querySelector('[data-graph]');
  const elementInitialPosition = parseFloat(window.getComputedStyle(circleElement).right)
  const elementInitialRotation = 0


  document.addEventListener('scroll', () => {
    marker = document.querySelector('[data-marker]').getBoundingClientRect();
    let percentage = 0

    percentage = (viewportHeight - marker.top) / (viewportHeight + marker.height) * 100
    percentage = Math.min(Math.max(percentage, 0), 100)

    let x = elementInitialRotation - percentage / 100 * 360

    circleElement.style.right = `${elementInitialPosition - ((elementInitialPosition / 100) * percentage)}px`
    circleElement.style.transform = `rotate(${x}deg)`;
  })

}

export default statsInit