import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

export const butterflyAnimation = () => {
  const butterflyTimeLine = gsap.timeline({paused: true})

  butterflyTimeLine.to('.butterfly', {
    duration: 7,
    delay: 5,
    motionPath: [
      {x: 0, y: 0},
      {x: -500, y: 200},
      {x: -1100, y: 50},
    ],
    opacity: 0,
    ease: 'power1.inOut',
  })

  const restartButterflyAnimation = () => {
    butterflyTimeLine.restart()
  }

  return {timeline: butterflyTimeLine, restartButterflyAnimation}
}
