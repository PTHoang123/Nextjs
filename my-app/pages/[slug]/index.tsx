import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import '../globals.css';
import styles from './details.module.css';
import { useRouter } from 'next/router';
import axios from 'axios';
import { useCart } from '../../context/CartContext';

function Index({ params }: { params: { slug: string } }) {
    const [course, setCourse] = useState<any>(null);
    const { state, dispatch } = useCart();
    const router = useRouter();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://api-pro.teklearner.com/class/v1/class-detail?id=${router.query.slug}`);
                const courseDetail = response.data.data.course;
                setCourse(courseDetail);
                console.log(courseDetail.course_discount);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        if (router.query.slug) {
            fetchData();
        }
    }, [router.query.slug]);

    const handleAddToCart = () => {
        dispatch({ type: 'INCREMENT_CART' });
    };

    return (
        <div>
            <Header />
            <div className={styles.main}>
                <div className={styles.container}>
                    <div>
                        <ul className={styles.listImg}>
                            <li className={styles.img}></li>
                            <li className={styles.img}></li>
                            <li className={styles.img}></li>
                            <li className={styles.img}></li>
                        </ul>
                    </div>
                    <div className={styles.box}></div>
                    <div className={styles.content}>
                        <div className={styles.title}>
                            <div className={styles.brand}>
                                <p>brand</p>
                            </div>
                            <div className="">
                                {course ? course.course_name : 'Loading...'}
                            </div>
                        </div>
                        <div className="">
                            Add to Favourites
                        </div>
                        <div className={styles.text}>
                            <p>{course ? course.course_description : 'Loading...'}</p>
                            <p>Read more</p>
                        </div>
                        <div className={styles.priceContainer}>
                            <p className={styles.discountedPrice}>{course ? course.course_price : 'Loading...'}</p>
                            {course && course.course_discount === 0 ? null : <p className={styles.price}>{course ? course.course_discount : 'Loading...'}</p>}
                            <button className={styles.discountBtn}>30% Off</button>
                        </div>
                        <div className={styles.track}>
                            <p>You can track the price of this product</p>
                            <p>Track Rate</p>
                        </div>
                        <div className={styles.listBtn}>
                            <button className={styles.btn} onClick={handleAddToCart}>ADD TO CART</button>
                            <button className={styles.btn}>BUYNOW</button>
                        </div>
                        <div className={styles.favourite}>
                            <p>View My Favourite List</p>
                        </div>
                        <div className={styles.listFavourite}>
                            <div className="">
                                <button className={styles.favouritebtn}>Lorem Ipsem</button>
                                <button className={styles.favouritebtn}>Lorem Ipsem</button>
                                <button className={styles.favouritebtn}>Lorem Ipsem</button>
                                <button className={styles.favouritebtn}>Lorem Ipsem</button>
                            </div>
                            <div className="">
                                <button className={styles.favouritebtn}>Lorem Ipsem</button>
                                <button className={styles.favouritebtn}>Lorem Ipsem</button>
                                <button className={styles.favouritebtn}>Lorem Ipsem</button>
                                <button className={styles.favouritebtn}>Lorem Ipsem</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;