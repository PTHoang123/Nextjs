import React from 'react'
interface BannerCard{
    title: string;
    subtitle: string;
}
import styles from './BannerCard.module.css'


function BannerCard({title, subtitle}: BannerCard) {
  return (
    <div className={styles.main}>
        <div>
        </div>
        <div className={styles.title}>
            <div className={styles.text}>
                <p className={styles.mainTitle}>
                    {title}
                </p>
                <p className= {styles.subTitle}>
                    {subtitle}
                </p>
            </div>
            <button className={styles.btn}>
                Shop Now
            </button>
        </div>
    </div>
    )
}

export default BannerCard