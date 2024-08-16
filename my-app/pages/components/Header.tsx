import React from 'react';
import styles from './Header.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {useCart} from '../../context/CartContext';
import { useRouter } from 'next/router';



const Header = () => {
    const { state, dispatch } = useCart();
    const router = useRouter();
   
    return (
        <div className={styles.header}>
            <div className={styles.top}>
                <div className={styles.logo}>
                    <p className={styles.lg}>Your Logo</p>
                </div>
                <div className={styles.left}>
                    <input type="text" placeholder='Type ' className={styles.search}/>
                    <nav className={styles.navbar}>
                        <ul className={styles.list}>
                            <li className={styles.item}>
                                <ShoppingCartIcon/>
                                Cart ({state.cart})|
                            </li>
                            <li className={styles.item}>
                                <AccountCircleIcon/>
                                User |
                            </li>
                            <li>عربى</li>
                        </ul>
                    </nav>
                </div>
            </div>
            <div className={styles.bottom}>
                <nav className={styles.navBottom}>
                    <ul className={styles.ulBottom}>
                        <li>All Brands</li>
                        <li>Skincare</li>
                        <li>Make Up</li>
                        <li>Hair Care</li>
                        <li>Bath & Body</li>
                        <li>Beauty Supplements</li>
                        <li>Promos</li>
                    </ul>
                </nav>
                <button className={styles.btn}>
                    Sell With Us
                </button>
            </div>
        </div>
    )
}


export default Header;