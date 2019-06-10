import React, { Component } from 'react';
import { Checkbox } from 'antd';
import CheckboxItem from '../components/checkboxItem/index.js';

export default class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chooseList: [{ name: 'apple', checked: false },
            { name: 'lemon', checked: false },
            { name: 'melon', checked: false },
            { name: 'orange', checked: false }],
            chooseCheck: 0,
            Allchoose: false
        }
    }
    Allchoose(e) {
        this.setState({
            Allchoose: e.target.checked
        });
        if (this.state.Allchoose) {
            let arr = this.state.chooseList;
            arr.map((item, index) => {
                return item.checked = false;
            });
            this.setState({
                chooseCheck: 0,
            })
        } else {
            let arr = this.state.chooseList;
            arr.map((item, index) => {
                return item.checked = true;
            });
            this.setState({
                chooseCheck: this.state.chooseList.length,
                chooseList: arr
            })
        }
    }
    checkAllChoose(ItemChecked) {
        this.setState({
            chooseCheck: ItemChecked ? this.state.chooseCheck++ : this.state.chooseCheck--
        });
        if (this.state.chooseCheck === this.state.chooseList.length) {
            this.setState({
                Allchoose: true,
            })
        } else {
            if (this.state.Allchoose === true) {
                this.setState({
                    Allchoose: false,
                });
            }
        }
    }
    changeCheck(idx, checked) {
        this.state.chooseList[idx].checked = checked;
        this.setState({
            chooseList: this.state.chooseList
        });
        let newCheckedList = this.state.chooseList;
        let newArr = newCheckedList.filter((item, idx) => {
            return item.checked === true;
        });
        console.log(newArr);
        
    }
    render() {
        return (
            <div>
                123
                <Checkbox
                    onChange={(e) => { this.Allchoose(e) }}
                    checked={this.state.Allchoose}>
                    全选
                </Checkbox>
                {
                    this.state.chooseList.map((item, idx) => {
                        return (
                            <div className="checkbox-group" key={idx} >
                                <CheckboxItem
                                    item={item}
                                    idx={idx}
                                    chooseList={this.state.chooseList}
                                    changeCheck={this.changeCheck.bind(this)}
                                    checkAllChoose={(ItemChecked) => { this.checkAllChoose(ItemChecked) }}
                                />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}