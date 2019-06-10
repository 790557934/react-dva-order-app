import React from 'react';
import { Checkbox } from 'antd';
export default class CheckboxItem extends React.Component {
    _clickHandle(item, e) {
        this.props.checkAllChoose(e.target.checked);
        this.props.changeCheck(item, e.target.checked);
    }
    render() {
        const { item, idx } = this.props;
        return (
            <div>
                <Checkbox onChange={(e) => { this._clickHandle(idx, e) }} checked={item.checked}>
                    {item.name}
                </Checkbox>
            </div>
        )
    }
};