import React from 'react'
import styles from './styles.module.scss';
const IconButton = ({ icon, btnText }) => {
    return (
        <div className={styles.iconButton}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.text}>{btnText}</span>
        </div>
    )
}

export default IconButton