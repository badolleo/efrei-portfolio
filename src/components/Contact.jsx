import { useState } from 'react'

export default function ContactComponent() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null) // 'success' | 'error' | null

    const handleChange = (e) => {
        setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setStatus(null)
        try {
            const res = await fetch('/api/messages', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            })
            if (!res.ok) throw new Error()
            setForm({ name: '', email: '', message: '' })
            setStatus('success')
        } catch {
            setStatus('error')
        }
    }

    return (
        <div className="flex flex-col gap-4">
            <div>
                <h2 className="text-2xl xl:text-[40px] text-center font-bold font-[Playfair Display]">Contact</h2>
                <div className="w-[15vw] h-[2px] bg-main-yellow mx-auto my-2"></div>
            </div>
            <form onSubmit={handleSubmit} className="relative flex flex-col gap-4 mx-4">
                <div className="flex flex-col justify-center gap-1">
                    <div className="font-[nunito]">Name</div>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 border border-gray-100 bg-white inset-shadow-xs rounded-md focus:outline-none focus:ring-2 focus:ring-main-yellow"
                    />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <div className="font-[nunito]">Email</div>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 border border-gray-100 bg-white inset-shadow-xs rounded-md focus:outline-none focus:ring-2 focus:ring-main-yellow"
                    />
                </div>
                <div className="flex flex-col justify-center gap-1">
                    <div className="font-[nunito]">Message</div>
                    <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 border border-gray-100 bg-white inset-shadow-xs h-[150px] rounded-md focus:outline-none focus:ring-2 focus:ring-main-yellow resize-none"
                    />
                </div>
                {status === 'success' && (
                    <p className="text-green-600 text-sm">Message envoyé avec succès !</p>
                )}
                {status === 'error' && (
                    <p className="text-red-500 text-sm">Une erreur est survenue, réessayez.</p>
                )}
                <div className="flex justify-end">
                    <button type="submit" className="px-6 py-2 bg-main-yellow text-black rounded-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-600">Send</button>
                </div>
            </form>
        </div>
    )
}
