import gsap from 'gsap'

export const projectTextAnimation = () => {
  const projectTextTimeLine = gsap.timeline()

  projectTextTimeLine.to('.projects', {
    y: 120,
    duration: 1,
    stagger: 0.3,
    opacity: 1,
  })

  const restartProjectTextAnimation = () => {
    projectTextTimeLine.restart()
  }

  return {timeline: projectTextTimeLine, restartProjectTextAnimation}
}
