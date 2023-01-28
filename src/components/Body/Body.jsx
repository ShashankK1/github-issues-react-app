import React, { useEffect, useState } from 'react';
import { VscIssues } from 'react-icons/vsc';
import { TiTick } from 'react-icons/ti';
import styles from './styles.module.scss';
import ArrowButton from '../../reusable-components/ArrowButton/ArrowButton';
import nFormatter from '../../utilities/nFormatter';
import axios from 'axios';
import Issue from '../../reusable-components/Issue/Issue';

const Body = ({ data }) => {
    let { open_issues } = data;
    open_issues = nFormatter(open_issues, 1);
    const arrowButtonsText = ['Author', 'Label', 'Projects', 'Milestones', 'Assignee', 'Sort'];
    const arrowButtons = arrowButtonsText.map((text) => (<ArrowButton key={text} btnText={text} />));
    const url = 'https://api.github.com/repos/facebook/react/issues'

    const [issues, setIssues] = useState([]);

    useEffect(() => {
        axios.get(url).then(res => {
            if (res.status === 200) {
                console.log(res.data)
                setIssues(res.data);
            }
        })
    }, []);

    const issueContent = issues.map(issue => (<Issue key={issue?.id} data={issue} />))

    return (
        <div className={styles.body}>
            <div className={styles.bodyTop}>
                <div className={styles.bodyLeft}>
                    <VscIssues className={styles.text1} />
                    <span className={styles.text1}>{open_issues} Open</span>
                    <TiTick className={styles.text2} />
                    <span className={styles.text2}>10104 closed</span>
                </div>
                <div className={styles.bodyRight}>
                    {arrowButtons}
                </div>
            </div>
            <div className={styles.content}>
                {issueContent}
            </div>
        </div>
    )
}

export default Body