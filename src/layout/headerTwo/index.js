import React from 'react';
import styles from './index.less';


class HeaderTwo extends React.Component{
    render(){
        return(
            <div className={styles.wrapper}>
               <div className={styles.logo}>
                   <img src="http://wdlj.zoomdong.xin/security_logo.png" style={{width:"65px",height:"65px"}}  alt="logo"/>
               </div>
               <div className={styles.word}>
                 <img src="http://wdlj.zoomdong.xin/word.png" alt="word"/>
               </div>
            </div>
        )
    }
}
export default HeaderTwo;