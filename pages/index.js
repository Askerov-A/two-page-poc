import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import {getItems, URL} from "../api/items";

export const itemStyles = { border: '1px solid black', width: 400, margin: 10, textAlign: 'center' };

export default function Home(props) {
  const [data, setData] = useState(props.data);

  useEffect(() => {
    if (props.makeRequestOnClientPart) {
        getItems(URL).then(data => {
          setData(data);
          console.log(data);
        })
    }
  }, []);

  return (
    <div className={styles.container}>
        {data?.map((item) => (<div style={itemStyles} key={data.id}><img src={item.image} /><h1>{item.name}</h1></div>))}
    </div>
  )
}

export async function getServerSideProps(context) {
    const isServer = context.req.url === '/';

    if (isServer) {
        const data = await getItems(URL);
        return {
            props: {
                data,
            },
        }
    } else {
        return {
            props: {
                makeRequestOnClientPart: true,
            }
        }
    }
}