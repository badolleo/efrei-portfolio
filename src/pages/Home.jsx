import '../index.css'
import Button from '../components/Button'
import Projects from '../components/Projects'
import myself from '../config/myself.json'

export default function Header() {

    let description = myself.Description;
    let title = myself.Title;

    return (
        <div className="
            home-container 
            relative
            pt-8 
            flex flex-col items-start
            gap-6
            mx-[1.5rem] xl:mx-[3rem]
        ">
            <div className="
                w-[490px] 
                flex flex-col 
                gap-2 xl:gap-4
            ">
                <p className="
                    text-lg xl:text-xl
                    text-main-yellow 
                    font-meidum xl:font-bold
                ">{title}</p>
                <h1 className="
                    text-2xl xl:text-[64px]
                    font-bold
                ">Hello, my name is {myself.FirstName} {myself.Name}</h1>
            </div>
            <div>
                <p className="text-xl text-font-paragraph xl:w-[490px] ">
                    {description}
                </p>
            </div>
            <div className="w-7/10 flex flex-col gap-6">
                <div className="flex direction-row gap-4">
                    <Button text="Projects" onClick={() => {}} backgroundColor="var(--color-main-yellow)" textColor="#000" borderColor="var(--color-main-yellow)" radius="0.5rem" shadow="0 2px 4px rgba(0, 0, 0, 0.1)"/>
                    <Button text="Linkedin" onClick={() => {}} backgroundColor="#ffffff" textColor="#000" borderColor="#000" radius="0.5rem" shadow="0 2px 4px rgba(0, 0, 0, 0.1)"/>
                </div>
            </div>
            <Projects/>
        </div>
  )
}   