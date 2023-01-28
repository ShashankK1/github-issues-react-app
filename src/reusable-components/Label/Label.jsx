import React from 'react'
import styles from './styles.module.scss';
const Label = ({ data }) => {
    const { color, name } = data;
    return (
        <span className={styles.label} style={{ backgroundColor: `#${color}` }}>
            <span className={styles.text}>{name}</span>
        </span>
    )
}

export default Label;