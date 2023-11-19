import gsap from 'gsap'

export const experienceAnimation = () => {
  const experienceTimeLine = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
    repeat: 1,
  })

  experienceTimeLine
    .to('.bike', {x: '200%', duration: 2, ease: 'bounce'})
    .to('.experience', {opacity: 0, duration: 3, x: '-10%'})
    .to('.hyf', {opacity: 1, y: '45%', duration: 2, ease: 'back.out'})
    .to('.hyf-message', {y: '500%', opacity: 1, duration: 2}, '<')
    .to('.hyf-message, .hyf', {opacity: 0})
    .to('.bike', {x: '580%', duration: 2})
    .to('.walor', {y: '45%', opacity: 1, duration: 2, ease: 'back.out'})
    .to('.walor-message', {y: '42%', opacity: 1, duration: 2}, '<')
    .to('.walor-message, .walor', {opacity: 0, duration: 1})
    .to('.bike', {x: '1000%', duration: 2})
    .to('.rock, .stone', {opacity: 0, duration: 2})

  const restartExperienceAnimation = () => {
    experienceTimeLine.restart()
  }

  return {timeline: experienceTimeLine, restartExperienceAnimation}
}
