import { createContext, useContext, useState, useEffect } from 'react'
import defaultData from '../config/projects.json'

const ProjectsContext = createContext(null)

export function ProjectsProvider({ children }) {
    const [projects, setProjects] = useState(defaultData.projects)

    useEffect(() => {
        fetch('/api/projects')
            .then((r) => r.json())
            .then(setProjects)
            .catch(() => {})
    }, [])

    const addProject = async (project) => {
        const res = await fetch('/api/projects', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(project),
        })
        const newProject = await res.json()
        setProjects((prev) => [...prev, newProject])
        return newProject
    }

    const updateProject = async (id, data) => {
        await fetch(`/api/projects/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
        setProjects((prev) => prev.map((p) => (p.id === id ? { ...p, ...data } : p)))
    }

    const deleteProject = async (id) => {
        await fetch(`/api/projects/${id}`, { method: 'DELETE' })
        setProjects((prev) => prev.filter((p) => p.id !== id))
    }

    return (
        <ProjectsContext.Provider value={{ projects, addProject, updateProject, deleteProject }}>
            {children}
        </ProjectsContext.Provider>
    )
}

export function useProjects() {
    return useContext(ProjectsContext)
}
