import React from 'react';
import { BsGithub } from 'react-icons/bs';
import styles from './styles.module.scss';
const Footer = () => {

    const firstText = ['Terms', 'Privacy', 'Security', 'Status', 'Docs'];
    const secondText = ['Contact Github', 'Pricing', 'API', 'Training', 'Blog', 'About'];


    return (
        <div className={styles.footer}>
            <div className={styles.firstComponent}>
                {
                    firstText.map((text) => <span key={text} className={styles.text}>{text}</span>)
                }
            </div>
            <BsGithub className={styles.icon} />
            <div className={styles.secondComponent}>
                {
                    secondText.map((text) => (<span key={text} className={styles.text}>{text}</span>))
                }
            </div>
        </div>
    )
}

export default Footer