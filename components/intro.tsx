import { CMS_NAME } from '../lib/constants'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <h1 className="text-6xl md:text-6xl font-bold tracking-tighter leading-tight md:pr-8" style={{letterSpacing: 1.2}}>
        하루살이 개발자, 루테스<br/>
        <p style={{marginTop: '24px', fontWeight: 'bold', fontSize: '25px', letterSpacing: 2}}>오늘 하루가 마지막인 것처럼,</p>
      </h1>
    </section>
  )
}

export default Intro
