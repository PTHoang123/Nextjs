import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import './globals.css';
import Main from './components/main/Main';
import styles from './Page.module.css';
import Foot from './components/foot/Foot';
import axios from 'axios';
import RootLayout from './layout';
import { get } from 'http';
// import { CartProvider } from '../context/CartContext';
import { useCart } from '../context/CartContext';


interface Teacher {
    id: string;
    name: string;
    email: string;
}

interface Data {
    teachers: Teacher[];
}

const Page = () => {
    const [teachers, setTeachers] = useState<Teacher[]>([]);
    const [classDetails, setClassDetails] = useState<any[]>([]);
    const { state, dispatch } = useCart();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://api-pro.teklearner.com/class/v1/get-list-class?class_code=&skip=0&limit=16');
                const result = response.data;
                console.log(result);

                const allTeachers = result.data.flatMap((classItem: any) => classItem.teachers);
                setTeachers(allTeachers);

                const classDetailsArray = result.data.map((classItem: any) => ({
                    class_name: classItem.class_name,
                    class_status: classItem.class_status,
                    course_discount: classItem.course_discount,
                    course_price: classItem.course_price,
                    class_type: classItem.class_type,
                    courseId: classItem.id
                }));
                setClassDetails(classDetailsArray);
                console.log(classDetailsArray);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div>
            <Header />
            <Main teacher={teachers} classDetails={classDetails} />
            <Foot />
        </div>
    );
};

export default Page;