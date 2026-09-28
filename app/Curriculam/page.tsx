import HeroCurriculum from '@/components/curriculam/Herosection'
import ReadingProgramCards from '@/components/curriculam/readingprogrammes'
import ReadingProgrammes from '@/components/curriculam/readingprogrammes'
import SkillBuildingProgrammes from '@/components/curriculam/skillBuilding'
import ValueAddedProgrammes from '@/components/curriculam/ValueAddedProgrammes'
import React from 'react'

const page = () => {
  return (
    <>
    <HeroCurriculum/>
    <ReadingProgramCards/>
    <SkillBuildingProgrammes/>
    <ValueAddedProgrammes/>
    </>
    
  )
}

export default page