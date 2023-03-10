import React from 'react';
import { GoRepo } from 'react-icons/go';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineStar } from 'react-icons/ai';
import { BiGitRepoForked } from 'react-icons/bi';
import { BsCode } from 'react-icons/bs';
import { BiGitPullRequest } from 'react-icons/bi';
import { BsPlayCircle } from 'react-icons/bs';
import { AiOutlineProject } from 'react-icons/ai';
import { HiOutlineBookOpen } from 'react-icons/hi';
import { MdSecurity } from 'react-icons/md';
import { AiOutlineLineChart } from 'react-icons/ai';
import { VscIssues } from 'react-icons/vsc';
import IconButton from '../../reusable-components/IconButton/IconButton';
import styles from './styles.module.scss';
import InfoButton from '../../reusable-components/InfoButton/InfoButton';
import Tabs from '../../reusable-components/Tabs/Tabs';
import nFormatter from '../../utilities/nFormatter';

const Header = ({ data }) => {
    let { owner, name, forks, open_issues, stargazers_count } = data;
    forks = nFormatter(forks, 3);
    open_issues = nFormatter(open_issues, 1);
    stargazers_count = nFormatter(stargazers_count, 1);

    return (
        <div className={styles.Header}>
            <div className={styles.repoHeader}>
                <div className={styles.repo}>
                    <GoRepo className={styles.goRepo} />
                    <div className={styles.heading}>
                        <span className={styles.facebook}>{owner?.login}</span>
                        <span className={styles.react}>{name}</span>
                    </div>
                    <span className={styles.public}>Public</span>
                </div>
                <div className={styles.repoButtons}>
                    <IconButton icon={<AiOutlineBell />} btnText={'Notifications'} />
                    <InfoButton infoIcon={<AiOutlineStar />} info={'Star'} value={stargazers_count} />
                    <InfoButton infoIcon={<BiGitRepoForked />} info={'Fork'} value={forks} />
                </div>
            </div>
            <div className={styles.repoTabs}>
                <Tabs icon={<BsCode />} text={'Code'} />
                <Tabs icon={<VscIssues />} text={'Issues'} value={open_issues} selected={true} />
                <Tabs icon={<BiGitPullRequest />} text={'Pull requests'} value={208} />
                <Tabs icon={<BsPlayCircle />} text={'Actions'} />
                <Tabs icon={<AiOutlineProject />} text={'Projects'} />
                <Tabs icon={<HiOutlineBookOpen />} text={'Wiki'} />
                <Tabs icon={<MdSecurity />} text={'Security'} />
                <Tabs icon={<AiOutlineLineChart />} text={'Insights'} />
            </div>
        </div>
    )
}

export default Header;