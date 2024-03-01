'use client'
import { useFormStatus } from "react-dom"
import styles from './buttonList.module.css'

export default function AddListButton() {
  const { pending } = useFormStatus()

  return (
    <button type="submit" disabled={pending} className={styles.button}>
      {pending ? 'Adicionando...' : 'Adicionar'}
    </button>
  )
}