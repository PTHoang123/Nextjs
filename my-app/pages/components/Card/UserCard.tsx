import React from 'react'
import styles from './UserCard.module.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

interface UserCardProps {
  icon1: React.ReactNode;
  icon2: React.ReactNode;
  icon3: React.ReactNode;
  username: String;
  name: String;
}
function UserCard({icon1, icon2, icon3 , username, name}: UserCardProps) {
  return (
    <div className={styles.userCard}>
        <div className={styles.avatar}>
            <PersonOutlineOutlinedIcon style={{ width: 55, height: 55 , opacity: 0.3 }}/>
        </div>
        <div className={styles.info}>
            <p>{name}</p>
            <div className={styles.username}>
                <p>{username}</p>
            </div>
            <div className={styles.icon}>
              {icon1}
              {icon2}
              {icon3}
            </div>
            <button className={styles.btn}>
              SHOP WITH ME
            </button>
        </div>
    </div>
  )
}

export default UserCard