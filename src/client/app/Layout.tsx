import React from 'react';
import { Link } from 'react-router-dom';
import './layout.less';

export default function Index(props: any) {
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