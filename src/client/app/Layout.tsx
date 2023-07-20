import React from 'react';
import { Link } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';
import './layout.less';

function Index(props: any) {
    return (
        <div className='layout-box'>
            <h1>??</h1>
            <Link to="/index">首页</Link>
            -
            <Link to="/list">列表页</Link>
            <div>{props.children}</div>
        </div>
    )
}

export default hot(Index);