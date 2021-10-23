import React from 'react'
import SectionCode from '../components/SectionCode'
import { codeExampleOne } from '../codeSnippets/codeOne'
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <section className='partOne'>
        <SectionCode
          sectionID='partOne'
          title='przykład nr 1'
          version='secondary'
          description='sample code'
          codeExample={codeExampleOne}
        />
      </section>
    </>
  )
}
export default About
