import React from 'react'
import SectionCode from '../components/SectionCode'
import { codeExampleOne } from '../codeSnippets/codeOne'
interface AboutProps {}

const About: React.FC<AboutProps> = () => {
  return (
    <>
      <SectionCode
        sectionID='partOne'
        title='przykład nr 1'
        version='danger'
        description='sample code'
        codeExample={codeExampleOne}
      />

      <SectionCode
        sectionID='partTwo'
        title='przykład nr 2'
        version='secondary'
        description='sample code'
        codeExample={codeExampleOne}
      />

      <SectionCode
        sectionID='partThree'
        title='przykład nr 3'
        version='info'
        description='sample code'
        codeExample={codeExampleOne}
      />
    </>
  )
}
export default About
