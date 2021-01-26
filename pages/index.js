import React from 'react';
import styles from '../styles/Home.module.css'
import {getItems, URL} from "../api/items";

export const itemStyles = { border: '1px solid black', width: 400, margin: 10, textAlign: 'center' };

export default function Home(props) {
  return (
    <div className={styles.container}>
        {props.data?.map((item) => (<div style={itemStyles} key={item.id}><img src={item.image} /><h1>{item.name}</h1></div>))}
    </div>
  )
}

Home.getInitialProps = async () => {
    const data = await getItems(URL);
    return {
        data,
    }
}
