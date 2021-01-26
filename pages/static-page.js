import React from 'react';
import styles from '../styles/Home.module.css'
import {getItems, STATIC_DATA_URL} from "../api/items";

function StaticPage(props) {
    return (
        <div className={styles.container}>
            {props.data?.data}
        </div>
    )
}

export const getStaticProps = async () => {
    const data = await getItems(STATIC_DATA_URL);
    return {
        props: {
            data,
        }
    }
}

export default StaticPage;
