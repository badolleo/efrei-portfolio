import data from "../config/projects.json"
import ProjectCard from "./ProjectCard";


export default function Projects() {

  return (
    <div className="width-full relative h-screen flex flex-col items-center justify-start my-10 gap-3">
      <h2 className="text-2xl font-bold font-[Playfair Display]">Projects</h2>
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
  )
}