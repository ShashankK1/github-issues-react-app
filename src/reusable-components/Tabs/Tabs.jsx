import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';
const Tabs = (props) => {
    const { icon, text, value, selected } = props;
    const tabClass = classNames(styles.tabs, selected && styles.selected);
    return (
        <div className={tabClass}>
            <span className={styles.icon}>{icon}</span>
            <span className={styles.text}>{text}</span>
            {value && <span className={styles.value}>{value}</span>}
        </div>
    )
}

export default Tabs;