import { useState, useEffect } from 'react'
import { useProjects } from '../context/ProjectsContext'
import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const emptyForm = { title: '', description: '', images: '', link: '' }

export default function Admin() {
    const { projects, addProject, updateProject, deleteProject } = useProjects()
    const { user, logout } = useAuth()
    const navigate = useNavigate()

    const [form, setForm] = useState(emptyForm)
    const [editingId, setEditingId] = useState(null)
    const [confirmDelete, setConfirmDelete] = useState(null)
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch('/api/messages')
            .then((r) => r.json())
            .then(setMessages)
            .catch(() => {})
    }, [])

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleEdit = (project) => {
        setEditingId(project.id)
        setForm({ title: project.title, description: project.description, images: project.images, link: project.link })
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }

    const handleCancel = () => {
        setEditingId(null)
        setForm(emptyForm)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (editingId !== null) {
            await updateProject(editingId, form)
            setEditingId(null)
        } else {
            await addProject(form)
        }
        setForm(emptyForm)
    }

    const handleDelete = async (id) => {
        if (confirmDelete === id) {
            await deleteProject(id)
            setConfirmDelete(null)
            if (editingId === id) handleCancel()
        } else {
            setConfirmDelete(id)
        }
    }

    const handleLogout = () => {
        logout()
        navigate('/')
    }

    return (
        <div className="mx-[1.5rem] xl:mx-[3rem] py-10 flex flex-col gap-10">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl xl:text-[40px] font-bold">Admin</h1>
                    <div className="w-[8vw] h-[2px] bg-main-yellow my-2"></div>
                    <p className="text-font-paragraph text-sm">Connecté en tant que {user?.email}</p>
                </div>
                <button
                    onClick={handleLogout}
                    className="px-5 py-2 border border-black rounded-full text-sm font-header hover:bg-black hover:text-white transition-colors"
                >
                    Déconnexion
                </button>
            </div>

            {/* Form */}
            <div className="backdrop-blur-md bg-white/70 rounded-2xl p-8 shadow-card flex flex-col gap-6">
                <h2 className="text-xl font-bold font-header">
                    {editingId !== null ? 'Modifier le projet' : 'Ajouter un projet'}
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-header font-medium">Titre *</label>
                        <input
                            type="text"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                            required
                            placeholder="Nom du projet"
                            className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-main-yellow transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-header font-medium">Description *</label>
                        <textarea
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                            required
                            rows={4}
                            placeholder="Description du projet"
                            className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-main-yellow transition-colors resize-none"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-header font-medium">URL de l'image</label>
                        <input
                            type="text"
                            name="images"
                            value={form.images}
                            onChange={handleChange}
                            placeholder="https://..."
                            className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-main-yellow transition-colors"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label className="text-sm font-header font-medium">Lien du projet</label>
                        <input
                            type="text"
                            name="link"
                            value={form.link}
                            onChange={handleChange}
                            placeholder="https://..."
                            className="border border-gray-300 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-main-yellow transition-colors"
                        />
                    </div>
                    <div className="flex gap-3 mt-2">
                        <button
                            type="submit"
                            className="px-6 py-2 bg-main-yellow rounded-full text-sm font-header font-medium hover:opacity-90 transition-opacity"
                        >
                            {editingId !== null ? 'Enregistrer' : 'Ajouter'}
                        </button>
                        {editingId !== null && (
                            <button
                                type="button"
                                onClick={handleCancel}
                                className="px-6 py-2 border border-gray-400 rounded-full text-sm font-header hover:border-black transition-colors"
                            >
                                Annuler
                            </button>
                        )}
                    </div>
                </form>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold font-header">Messages ({messages.length})</h2>
                {messages.length === 0 && (
                    <p className="text-font-paragraph text-sm">Aucun message pour l'instant.</p>
                )}
                <div className="flex flex-col gap-3">
                    {messages.map((msg) => (
                        <div key={msg.id} className="bg-card-background rounded-2xl p-5 flex flex-col gap-2 shadow-sm">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <span className="font-bold text-sm">{msg.name}</span>
                                    <span className="text-font-paragraph text-xs">{msg.email}</span>
                                </div>
                                <span className="text-font-paragraph text-xs flex-shrink-0">{msg.date}</span>
                            </div>
                            <p className="text-sm text-font-paragraph whitespace-pre-wrap">{msg.message}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Project list */}
            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-bold font-header">Projets ({projects.length})</h2>
                {projects.length === 0 && (
                    <p className="text-font-paragraph text-sm">Aucun projet pour l'instant.</p>
                )}
                <div className="flex flex-col gap-3">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`bg-card-background rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm ${editingId === project.id ? 'ring-2 ring-main-yellow' : ''}`}
                        >
                            <div className="flex items-center gap-4 min-w-0">
                                {project.images && (
                                    <img
                                        src={project.images}
                                        alt={project.title}
                                        className="w-16 h-16 object-cover rounded-xl flex-shrink-0"
                                        onError={(e) => { e.target.style.display = 'none' }}
                                    />
                                )}
                                <div className="min-w-0">
                                    <h3 className="font-bold text-sm xl:text-base truncate">{project.title}</h3>
                                    <p className="text-font-paragraph text-xs xl:text-sm line-clamp-2">{project.description}</p>
                                </div>
                            </div>
                            <div className="flex gap-2 flex-shrink-0">
                                <button
                                    onClick={() => handleEdit(project)}
                                    className="px-4 py-1.5 border border-black rounded-full text-xs font-header hover:bg-main-yellow hover:border-main-yellow transition-colors"
                                >
                                    Modifier
                                </button>
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className={`px-4 py-1.5 rounded-full text-xs font-header transition-colors ${confirmDelete === project.id ? 'bg-red-500 text-white border border-red-500' : 'border border-red-400 text-red-500 hover:bg-red-500 hover:text-white'}`}
                                >
                                    {confirmDelete === project.id ? 'Confirmer' : 'Supprimer'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
