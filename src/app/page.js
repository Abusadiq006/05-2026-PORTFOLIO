import Hero from "@/components/Hero"
import WorkSection from "@/components/WorkSection"
import Expertise from "@/components/Expertise"
import Contact from "@/components/Contact"
import contact from "@/app/actions/contact"

export default function Home() {
  return(
    <main className="flex-1">
      <Hero />
      <Expertise />
      <contact/>
      <Contact />
      <WorkSection />
      {/* Future sections like Experience, Tech Stack Matrix, or Contact will plug in here */}
    </main>
  )
}