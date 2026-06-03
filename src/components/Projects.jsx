import data from "../config/projects.json"
import ProjectCard from "./ProjectCard";


export default function ProjectsList() {

  return (
    <div className="w-full flex flex-col items-center justify-center">
    <div className="
      xl:max-w-[1150px]
      relative flex flex-col items-center justify-start 
      my-10 xl:my-35
      xl:px-[8rem]
      gap-3
    ">
      <div>
        <h2 className="text-2xl xl:text-[40px] font-bold font-[Playfair Display] text-center">Projects</h2>
        <div className="w-[15vw] h-[2px] bg-main-yellow mx-auto my-2"></div>
      </div>
      <div className="w-full flex flex-col gap-8 my-5">
        {data["projects"].map((item, index) => {
          return (
              <ProjectCard 
                projectTitle={item.title} 
                projectDescription={item.description} 
                projectImage={item.images} 
                projectLink={item.link}
                id={index}
              />
          );
        })}
      </div>
    </div>
    </div>
  )
}