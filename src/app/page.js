import Hero from "@/components/Hero"
import WorkSection from "@/components/WorkSection"
import Expertise from "@/components/Expertise"
import Contact from "@/app/contact/ContactForm"


export default function Home() {
  return(
    <main className="flex-1">
      <Hero />
      <Expertise />
      <WorkSection />
      <Contact />
    </main>
  )
}
