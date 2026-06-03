import { useSearchParams, Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import data from '../config/projects.json'
import defaultImage from '../assets/default_image.jpg'

export default function ProjectDetail() {
    const [searchParams] = useSearchParams()
    const id = parseInt(searchParams.get('id'))
    const project = data.projects[id]

    const [url, setUrl] = useState(defaultImage)

    useEffect(() => {
        if (!project) return
        const img = new Image()
        img.onload = () => setUrl(project.images)
        img.onerror = () => setUrl(defaultImage)
        img.src = project.images
    }, [project])

    if (!project) {
        return (
            <div className="mx-[1.5rem] xl:mx-[3rem] py-20 flex flex-col items-center gap-4">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <Link to="/" className="text-main-yellow underline font-header">Back to home</Link>
            </div>
        )
    }

    return (
        <div className="mx-[1.5rem] xl:mx-[3rem] py-10 flex flex-col gap-8">
            <Link to="/" className="text-sm font-header text-gray-500 hover:text-main-yellow transition-colors">← Back</Link>
            <div className="flex flex-col xl:flex-row gap-8 xl:gap-16 items-center">
                <img
                    src={url}
                    alt={project.title}
                    className="w-full xl:w-1/2 rounded-2xl object-cover aspect-video"
                />
                <div className="flex flex-col gap-4 xl:gap-6 justify-center xl:w-1/2">
                    <h1 className="text-3xl xl:text-[52px] font-bold leading-tight">{project.title}</h1>
                    <p className="text-font-paragraph text-base xl:text-lg">{project.description}</p>
                    {project.link && (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="self-start px-6 py-2 border border-black rounded-full text-sm font-header hover:bg-main-yellow hover:border-main-yellow transition-colors"
                        >
                            View Live
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}
