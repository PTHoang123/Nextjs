import React, { useState } from 'react';
import styles from './Main.module.css';
import Card from '../Card/Card';
import ProductCard from '../Card/ProductCard';
import BannerCard from '../Card/BannerCard';
import UserCard from '../Card/UserCard';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';

interface Teacher {
    id: string;
    email: string;
    name: string;
}

interface Info {
    teacher: Teacher[];
    classDetails: any[];
}

function Main({ teacher, classDetails, }: Info) {
    const [info, setInfo] = useState(teacher);
    const [detail, setDetail] = useState<any[]>(classDetails);

    return (
        <div className={styles.main}>
            <div className={styles.carousel}></div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p className={styles.mainTitle}>NEW ARRIVALS</p>
                    <p className={styles.subTitle}>SEE ALL</p>
                </div>
                <div className={styles.banner}>
                <Card />
                <div className={styles.card}>
                    {classDetails.slice(0, 2).map((classItem) => (
                        <ProductCard
                            key={classItem.class_name}
                            buttonText={classItem.class_type}
                            className={classItem.class_name}
                            courseDiscount={classItem.course_discount}
                            coursePrice={classItem.course_price}
                            active={classItem.class_status}
                            courseId={classItem.courseId}
                        />
                    ))}
                </div>
            </div>
            <div className={styles.banner}>
                <div className={styles.card}>
                    {classDetails.slice(0, 2).map((classItem) => (
                        <ProductCard
                            key={classItem.class_name}
                            buttonText={classItem.class_type}
                            className={classItem.class_name}
                            courseDiscount={classItem.course_discount}
                            coursePrice={classItem.course_price}
                            active={classItem.class_status}
                            courseId={classItem.courseId}
                        />
                    ))}
                </div>
                <Card />
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p className={styles.mainTitle}>NEW ARRIVALS</p>
                    <p className={styles.subTitle}>SEE ALL</p>
                </div>
                <div className={styles.listCard}>
                    <div className={styles.card}>
                        {classDetails.map((classItem) => (
                            <ProductCard
                                key={classItem.class_name}
                                buttonText={classItem.class_type}
                                className={classItem.class_name}
                                courseDiscount={classItem.course_discount}
                                coursePrice={classItem.course_price}
                                active={classItem.class_status}
                                courseId={classItem.courseId}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <BannerCard title='50% OFF' subtitle='On All Items' />
            </div>
            <div className={styles.container}>
                <div className={styles.title}>
                    <p className={styles.mainTitle}>TOP SELLER</p>
                    <p className={styles.subTitle}>SEE ALL</p>
                </div>
                <div className={styles.listCard}>
                    <div className={styles.card}>
                        {classDetails.map((classItem) => (
                            <ProductCard
                                key={classItem.class_name}
                                buttonText={classItem.class_type}
                                className={classItem.class_name}
                                courseDiscount={classItem.course_discount}
                                coursePrice={classItem.course_price}
                                active={classItem.class_status}
                                courseId={classItem.courseId}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <BannerCard title='30% OFF' subtitle='All SKINCARE Items' />
            </div>
            <div className={styles.ambassador}>
                <div className={styles.title}>
                    <p className={styles.mainTitle}>TOP SELLER</p>
                    <p className={styles.subTitle}>SEE ALL</p>
                </div>
                <div className={styles.userCard}>
                    {teacher.map((teacher) => (
                        <UserCard
                            key={teacher.id}
                            icon1={<LiveHelpOutlinedIcon />}
                            icon2={<LiveHelpOutlinedIcon />}
                            icon3={<LiveHelpOutlinedIcon />}
                            username={teacher.email}
                            name={teacher.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Main;