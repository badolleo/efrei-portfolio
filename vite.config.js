import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, writeFileSync } from 'fs'
import { resolve } from 'path'

const projectsPath = resolve('./src/config/projects.json')
const messagesPath = resolve('./src/config/messages.json')

function projectsApiPlugin() {
  return {
    name: 'projects-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url.startsWith('/api/projects')) return next()

        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')

        const urlPath = req.url.replace('/api/projects', '').split('?')[0]
        const idMatch = urlPath.match(/^\/(\d+)$/)
        const id = idMatch ? parseInt(idMatch[1]) : null

        const getData = () => JSON.parse(readFileSync(projectsPath, 'utf-8'))
        const saveData = (data) => writeFileSync(projectsPath, JSON.stringify(data, null, 8))

        if (req.method === 'GET') {
          res.end(JSON.stringify(getData().projects))
          return
        }

        let body = ''
        req.on('data', (chunk) => (body += chunk))
        req.on('end', () => {
          try {
            const data = getData()

            if (req.method === 'POST') {
              const project = JSON.parse(body)
              const newId =
                data.projects.length > 0
                  ? Math.max(...data.projects.map((p) => p.id)) + 1
                  : 1
              const newProject = { id: newId, ...project }
              data.projects.push(newProject)
              saveData(data)
              res.statusCode = 201
              res.end(JSON.stringify(newProject))
            } else if (req.method === 'PUT' && id !== null) {
              const updates = JSON.parse(body)
              data.projects = data.projects.map((p) =>
                p.id === id ? { ...p, ...updates } : p
              )
              saveData(data)
              res.end(JSON.stringify(data.projects.find((p) => p.id === id)))
            } else if (req.method === 'DELETE' && id !== null) {
              data.projects = data.projects.filter((p) => p.id !== id)
              saveData(data)
              res.statusCode = 204
              res.end()
            } else {
              res.statusCode = 404
              res.end(JSON.stringify({ error: 'Not found' }))
            }
          } catch (err) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: err.message }))
          }
        })
      })
    },
  }
}

function messagesApiPlugin() {
  return {
    name: 'messages-api',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (!req.url.startsWith('/api/messages')) return next()

        res.setHeader('Content-Type', 'application/json')
        res.setHeader('Access-Control-Allow-Origin', '*')

        const getData = () => JSON.parse(readFileSync(messagesPath, 'utf-8'))
        const saveData = (data) => writeFileSync(messagesPath, JSON.stringify(data, null, 8))

        if (req.method === 'GET') {
          res.end(JSON.stringify(getData().messages))
          return
        }

        let body = ''
        req.on('data', (chunk) => (body += chunk))
        req.on('end', () => {
          try {
            const data = getData()
            if (req.method === 'POST') {
              const msg = JSON.parse(body)
              const newId = data.messages.length > 0
                ? Math.max(...data.messages.map((m) => m.id)) + 1
                : 1
              const newMessage = {
                id: newId,
                ...msg,
                date: new Date().toLocaleDateString('fr-FR'),
              }
              data.messages.push(newMessage)
              saveData(data)
              res.statusCode = 201
              res.end(JSON.stringify(newMessage))
            } else {
              res.statusCode = 404
              res.end(JSON.stringify({ error: 'Not found' }))
            }
          } catch (err) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: err.message }))
          }
        })
      })
    },
  }
}

export default defineConfig({
  plugins: [react(), tailwindcss(), projectsApiPlugin(), messagesApiPlugin()],
})
