import AnnualPlanner from "@/components/home/annualplanner"
import Classes from "@/components/home/classes"
import Hero from "@/components/home/Herosection"
import PvmProvides from "@/components/home/pvmprovides"
import InfoGridSection from "@/components/home/about"
import StudentAchievements from "@/components/home/student"
import FAQSection from "@/components/contact/faq"

function page() {
  return (
    <>
    <Hero/>  
    <InfoGridSection/>
    <AnnualPlanner/>
    <StudentAchievements/>
    <Classes/>
    <PvmProvides/>
    <FAQSection/>
    
    </>
    

  )
}

export default page