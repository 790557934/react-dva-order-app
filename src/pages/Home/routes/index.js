import React from 'react';
import {connect} from 'dva';
import style from './index.scss';

function Home(props) {
    return (
        <div className={style.homeContent}>
            <div className={style.centerInfo}>
                <h1>欢迎大家来到xxxPIZZA</h1>
                <h2>这里有各种美味的PIZZA</h2>
            </div>
        </div>
    )
};

export default connect(({home}) => ({...home}) )(Home);
