import React from 'react';
import { AiFillCaretDown } from 'react-icons/ai';
import styles from './styles.module.scss';
const ArrowButton = ({ btnText }) => {
    return (
        <div className={styles.arrowButton}>
            <span className={styles.text}>{btnText}</span>
            <AiFillCaretDown className={styles.icon} />
        </div>
    )
}

export default ArrowButton