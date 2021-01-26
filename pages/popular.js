import React from 'react';
import styles from '../styles/Home.module.css'
import {getItems, POPULAR_URL, URL} from "../api/items";
import {itemStyles} from "./index";

function Popular(props) {
    return (
        <div className={styles.container}>
            {props.data?.map((item) => (<div style={itemStyles} key={item.id}><img src={item.image} /><h1>{item.name}</h1></div>))}
        </div>
    )
}

Popular.getInitialProps = async () => {
    const data = await getItems(POPULAR_URL);
    return {
        data,
    }
}

export default Popular;