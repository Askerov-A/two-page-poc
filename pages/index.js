import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import {getItems, INDIVIDUAL_URL, URL} from "../api/items";

export const itemStyles = { border: '1px solid black', width: 400, margin: 10, textAlign: 'center' };

export default function Home(props) {
  const [indData, setIndData] = useState(props.indData);

  useEffect(() => {
    getItems(INDIVIDUAL_URL).then(data => setIndData(data));
  }, []);

  return (
    <div className={styles.container}>
        <h1 style={{ marginBottom: 0 }}>Counter: {indData?.counter}</h1>
        <p style={{ marginBottom: 30, marginTop: 10 }}>(it updates twice because of prerender + client side fetch)</p>
        {props.data?.map((item) => (<div style={itemStyles} key={item.id}><img src={item.image} /><h2>{item.name}</h2></div>))}
    </div>
  )
}

Home.getInitialProps = async () => {
    const data = await getItems(URL);
    const indData = await getItems(INDIVIDUAL_URL);

    return {
        data,
        indData,
    }
}
