import { Banner } from "../components/Banner"
import { Works } from "../components/Works"

export default function WorkPage(){
  return (
    <main>
      <Banner title="Trabajos."/>
      <Works title="Trabajos" seeMore={false} cant={0}/>
    </main>
  )
}
