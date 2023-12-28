import gsap from 'gsap'
import MotionPathPlugin from 'gsap/MotionPathPlugin'

gsap.registerPlugin(MotionPathPlugin)

export const butterflyAnimation = () => {
  const butterflyTimeLine = gsap.timeline({paused: true})
  const screenWidth = window.innerWidth
  const screenHeight = window.innerHeight

  butterflyTimeLine.to('.butterfly', {
    duration: 5,
    delay: 5,
    motionPath: [
      {x: screenWidth / 4, y: screenHeight / 4},
      {x: screenWidth, y: screenHeight / 2},
    ],
    opacity: 0,
    ease: 'power1.inOut',
  })

  const restartButterflyAnimation = () => {
    butterflyTimeLine.restart()
  }

  return {timeline: butterflyTimeLine, restartButterflyAnimation}
}
