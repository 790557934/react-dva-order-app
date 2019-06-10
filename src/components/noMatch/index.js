import React from 'react'

export default function index(props) {
    const { status } = props;
    return (
        <div>
            { status } 访问的地址有误，请重新访问正确的地址
        </div>
    )
}
