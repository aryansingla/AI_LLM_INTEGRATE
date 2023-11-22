import Image from 'next/image'
import styles from './page.module.css'
import React from 'react'
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <main className={styles.main}>
       <Button variant="contained">Cheers !</Button>
    </main>
  )
}
