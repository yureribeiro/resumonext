import { revalidateTag } from 'next/cache'
import styles from './addList.module.css'
import AddListButton from '../addListButton'

export default async function AddList() {

  async function handleNewTech(form: FormData) {
    'use server'
    const name = form.get('name')

    if (!name) {
      return
    }

    // delay de 2s para simular uma requisição real
    await new Promise(resolve => setTimeout(resolve, 2000))

    await fetch('http://localhost:3333/tecnologias', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: name
      })
    })

    revalidateTag('get-tecs')
  }

  return (
    <form action={handleNewTech} className={styles.container}>
      <input type="text" name='name' placeholder='nova tecnologia' className={styles.input} />
      <AddListButton />
    </form>
  )
}