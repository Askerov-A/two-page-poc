import React, { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css'
import {getItems, POPULAR_URL} from "../api/items";
import {itemStyles} from "./index";

export default function Home(props) {
    const [data, setData] = useState(props.data);

    useEffect(() => {
        if (props.makeRequestOnClientPart) {
            getItems(POPULAR_URL).then(data => {
                setData(data);
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
    const isServer = context.req.url === '/popular';

    if (isServer) {
        const data = await getItems(POPULAR_URL);
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
