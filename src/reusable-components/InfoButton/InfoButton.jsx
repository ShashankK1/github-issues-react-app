import React from 'react';
import styles from './styles.module.scss';

const InfoButton = ({ infoIcon, info, value }) => {
    return (
        <div className={styles.infoButton}>
            <div className={styles.infoStatus}>
                <span className={styles.icon}>{infoIcon}</span>
                <span className={styles.text}>{info}</span>
            </div>
            <div className={styles.infoValues}>
                <span className={styles.value}>{value}</span>
            </div>
        </div>
    )
}

export default InfoButton