import gsap from 'gsap'

export const experienceAnimation = () => {
  const experienceTimeLine = gsap.timeline({
    defaults: {
      ease: 'power2.out',
    },
    repeat: 1,
  })

  const bike = '.bike'
  const experience = '.experience'
  const hyf = '.hyf'
  const hyfMessage = '.hyf-message'
  const walor = '.walor'
  const walorMessage = '.walor-message'
  const screenWidth = window.innerWidth

  experienceTimeLine
    .to(bike, {x: screenWidth / 5, duration: 2, ease: 'bounce'})
    .to(experience, {opacity: 0, duration: 3, x: '-10%'})
    .to(hyf, {
      opacity: 1,
      y: '-45%',
      duration: 2,
      ease: 'back.out',
    })
    .to(hyf, {
      opacity: 0,
      ease: 'back.out',
    })
    .to(hyfMessage, {y: '-45%', opacity: 1, duration: 2}, '<')
    .to(hyfMessage, {
      opacity: 0,
      ease: 'back.out',
    })
    .to(bike, {x: screenWidth / 2, duration: 2, ease: 'bounce'})
    .to(walor, {y: '45%', opacity: 1, duration: 2, ease: 'back.out'})
    .to(walor, {
      opacity: 0,
      ease: 'back.out',
    })
    .to(walorMessage, {y: '45%', opacity: 1, duration: 2}, '<')
    .to(walorMessage, {opacity: 0, ease: 'back.out'})
    .to(bike, {x: screenWidth, duration: 3})

  const restartExperienceAnimation = () => {
    experienceTimeLine.restart()
  }

  return {timeline: experienceTimeLine, restartExperienceAnimation}
}
