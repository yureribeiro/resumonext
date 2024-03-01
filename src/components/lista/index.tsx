import { Suspense } from 'react'
import styles from './lista.module.css'

interface list {
  id: number
  title: string
}

export default async function List() {

  // delay de 2s para simular uma requisição real
  await new Promise(resolve => setTimeout(resolve, 2000))

  const res = await fetch('http://localhost:3333/tecnologias', {
    next: {
      tags: ['get-tecs']
    }
  })
  const data: list[] = await res.json()

  return (
    <ul className={styles.list}>
      {data.map((tech: any) => (
        <li key={tech.id}>{tech.title}</li>
      ))}
    </ul>
  )
}