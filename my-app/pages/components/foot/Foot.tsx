import React from 'react'
import styles from './Foot.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocalPostOfficeIcon from '@mui/icons-material/LocalPostOffice';
import List from '../List/List';
import Subcribe from '../Subcribe/Subcribe';


const post1 = ["Sell with us", "About us", "Contact Us", "Promos" , "Become an Ambassador"];
const post2 = ['Terms of Usage', 'Privacy Policy', 'Return Policy', ];
const post3 = ["Skin Care", "Make Up", "Hair Care", "Bath & Body", "Beauty Supplements"];


function Foot() {
  return (
    <div className={styles.foot}>
        <div className={styles.logo}>
            <h1 className={styles.brand}>Your Logo</h1>
            <div className={styles.icon}>
                <FacebookIcon style={{ fontSize: 20 }}/>
                <TwitterIcon style={{ fontSize: 20, }}/>
                <LocalPostOfficeIcon style={{ fontSize: 20 }}/>
            </div>
            
        </div>
        <div className={styles.post}>
            <div className={styles.list}>
                <List title='MAIN PAGES' posts={post1}/>
            </div>
            <div className={styles.list}>
                <List title='POLICY' posts={post2}/>
            </div>
            <div className={styles.list}>
                <List title='CATEGORIES' posts={post3}/>
            </div>
            <div className={styles.subcribe}>
                <Subcribe/>
            </div>
        </div>
        
    </div>
  )
}

export default Foot