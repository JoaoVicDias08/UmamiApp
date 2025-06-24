import express, { RequestHandler } from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'
import * as dotenv from 'dotenv'
dotenv.config()

const app = express()
const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())

// DTOs só para tipar internamente
interface UsuarioDTO {
  nome: string
  email: string
  senha: string
}

interface LoginDTO {
  email: string
  senha: string
}

// Handler de cadastro
const cadastroHandler: RequestHandler = async (req, res, next) => {
  const { nome, email, senha } = req.body as UsuarioDTO

  try {
    const existente = await prisma.usuario.findUnique({ where: { email } })
    if (existente) {
      res.status(400).json({ erro: 'Email já cadastrado' })
      return
    }
    const novo = await prisma.usuario.create({ data: { nome, email, senha } })
    res.status(201).json(novo)
  } catch (err) {
    next(err)
  }
}

// Handler de login
const loginHandler: RequestHandler = async (req, res, next) => {
  const { email, senha } = req.body as LoginDTO

  try {
    const usuario = await prisma.usuario.findUnique({ where: { email } })
    if (!usuario || usuario.senha !== senha) {
      res.status(401).json({ erro: 'Credenciais inválidas' })
      return
    }
    res.json({ id: usuario.id, nome: usuario.nome, email: usuario.email })
  } catch (err) {
    next(err)
  }
}

app.post('/cadastro', cadastroHandler)
app.post('/login',   loginHandler)

app.listen(3333, () => {
  console.log('Servidor rodando na porta 3333')
})
