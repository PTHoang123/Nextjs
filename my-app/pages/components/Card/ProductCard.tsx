import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './ProductCard.module.css';

interface ProductCardProps {
    buttonText: string;
    className: string;
    courseDiscount: number;
    coursePrice: number;
    active: boolean;
    courseId: string;
}

function ProductCard({ buttonText, className, courseDiscount, coursePrice, active, courseId }: ProductCardProps) {
    const [disable, setDisable] = useState(courseDiscount === 0);
    const router = useRouter();

    const handleDiscountClick = () => {
        router.push(`/${courseId}`);
    };

    return (
        <div className={styles.card}>
            <div className={styles.banner}>
                <button className={styles.btn} disabled={disable}>
                    <p className={styles.text}>{buttonText}</p>
                </button>
            </div>
            <div className={styles.bottom}>
                <div className={styles.title}>
                    <p className={styles.mainTitle}>{className}</p>
                    <p className={styles.subTitle}>{active}</p>
                </div>
                <div className={styles.priceContainer}>
                    {disable == false ? <p className={styles.price}>{courseDiscount}</p> : null}
                    <p className={styles.discountedPrice}>{coursePrice}</p>
                    <button className={styles.discountBtn}  onClick={handleDiscountClick}>
                        30% Off
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;