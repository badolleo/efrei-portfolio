import '../App.css'
import logo from '../assets/yellow-bg.svg'
import Button from '../components/Button'
import Projects from '../components/Projects'

export default function Header() {
  return (
    <div className="home-container pt-15 px-[1.5rem] flex flex-col items-start gap-6">
        <div className="absolute top-0 right-0 -z-1">
            <img src={logo} alt="tache jaune" className="max-w-[250px]"/>
        </div>
        <div className="w-7/10 flex flex-col gap-6">
            <p className="text-lg text-main-yellow font-meidum">Developper</p>
            <h1 className="text-4xl font-bold">Hello, my name is Leo Badol</h1>
        </div>
        <div>
            <p className="text-xl text-font-paragraph">
                Short text with details about you, what you do or your professional career. You can add more information on the about page.
            </p>
        </div>
        <div className="w-7/10 flex flex-col gap-6">
            <div className="flex direction-row gap-4">
                <Button text="Projects" onClick={() => {}} backgroundColor="var(--color-main-yellow)" textColor="#000" className="ml-4" borderColor="var(--color-main-yellow)" radius="0.5rem" shadow="0 2px 4px rgba(0, 0, 0, 0.1)"/>
                <Button text="Linkedin" onClick={() => {}} backgroundColor="#ffffff" textColor="#000" borderColor="#000" radius="0.5rem" shadow="0 2px 4px rgba(0, 0, 0, 0.1)"/>
            </div>
        </div>
        <Projects/>
    </div>
  )
}   