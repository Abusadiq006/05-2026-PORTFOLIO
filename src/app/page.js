import Hero from "@/components/Hero"
import WorkSection from "@/components/WorkSection"

export default function Home() {
  return(
    <main className="flex-1">
      <Hero />
      <WorkSection />
      {/* Future sections like Experience, Tech Stack Matrix, or Contact will plug in here */}
    </main>
  )
}