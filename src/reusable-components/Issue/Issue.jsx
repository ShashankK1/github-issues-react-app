import React from 'react';
import { BiGitPullRequest } from 'react-icons/bi';
import { VscIssues } from 'react-icons/vsc';
import { GoComment } from 'react-icons/go';
import styles from './styles.module.scss';


const Issue = ({ data }) => {
    const { title, labels, pull_request, comments } = data;
    // const labelComponent = 
    // labels.map((label) => (<span className={styles.label} key={label?.id}><Label data={label} /></span>));
    const cmp = labels.map((label) =>
    (<span
        className={styles.label}
        key={label.id}
        style={{ backgroundColor: `#${label.color}` }}>
        {label.name}
    </span>))
    return (
        <div className={styles.issue}>
            <div className={styles.issueContent}>
                <div className={styles.text}>
                    <div className={styles.content}>
                        <VscIssues className={styles.icon} />
                        <strong>{title} {cmp}</strong>
                    </div>

                </div>
                <div className={styles.pr}>
                    {pull_request && <BiGitPullRequest />}
                </div>
                <div className={styles.image}>
                    image
                </div>
                <div className={styles.comment}>
                    {comments > 0 &&
                        <div className={styles.comm}>
                            <GoComment />
                            {comments}
                        </div>
                    }
                </div>
            </div>
            <div className={styles.issueStat}>
                issues stats
            </div>
        </div>
    )
}

export default Issue