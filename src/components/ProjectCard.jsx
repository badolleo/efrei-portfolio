import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import defaultImage from "../assets/default_image.jpg";
import Button from "./Button";

export default function ProjectCard({ projectTitle, projectDescription, projectImage, projectLink, id }) {
  const [url, setUrl] = useState(defaultImage);

  useEffect(() => {
    const img = new Image();
    img.onload = () => setUrl(projectImage);
    img.onerror = () => setUrl(defaultImage);
    img.src = projectImage;
  }, [projectImage]);

  const navigate = useNavigate();
  const isReversed = id % 2 !== 0;

  return (
    <div className={`relative bg-card-background rounded-2xl shadow-sm w-full flex overflow-hidden ${isReversed ? "flex-row-reverse" : ""}`}>
      <div className="
        w-[50%] 
        xl:min-h-[530px]
        p-4 xl:p-12
        flex flex-col items-start justify-center
        gap-4">
        <h3 className="text-2xl xl:text-[40px] font-bold">{projectTitle}</h3>
        <p className="overflow-hidden text-sm xl:text-[18px]">{projectDescription}</p>
        <Button text="View Project" onClick={() => navigate(`/project?id=${id}`)} backgroundColor="white" textColor="#000" borderColor="#000" radius="2rem"/>
      </div>
      <div className="w-[50%]">
        <img src={url} alt={projectTitle} className="w-full h-full object-cover" />
      </div>
    </div>
  )
}