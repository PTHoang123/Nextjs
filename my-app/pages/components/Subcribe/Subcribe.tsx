import React from 'react'
import styles from './Subcribe.module.css'
function Subcribe() {
  return (
    <div className={styles.subcribe}>
        <h1 className={styles.title}>SUBSCRIBE</h1>
        <p className= {styles.text}>Subscribe to our newsletter, so that you can be the first to know about new offers and promotions.</p>
        <div className={styles.form}>
            <input type="text" placeholder='Enter Email Address' className={styles.input} />
            <button className={styles.btn}>SUBSCRIBE</button>
        </div>
    </div>
  )
}

export default Subcribe