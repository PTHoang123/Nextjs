import React from 'react'
import styles from './Card.module.css'

function Card() {
  return (
    <div className={styles.card}>
        <button className={styles.btn}>
            Shop Now
        </button>
    </div>
  )
}

export default Card