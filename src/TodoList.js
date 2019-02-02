import React, {Component, Fragment} from 'react';
import TodoItem from './TodoItem'

class TodoList extends Component {

  constructor (props) {
    super(props);
    this.state = {
      list: [],
      input: ''
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleBtnClick () {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ''
    });
  }

  handleInput (e) {
    this.setState({
      input: e.target.value
    });
  }

  handleDelete (index) {
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list
    });
  }

  getTodoItems () {
    return (
      this.state.list.map((item, index) =>
        <TodoItem
          content={item}
          key={index}
          index={index}
          handleDelete={this.handleDelete}
        />
      )
    )
  }

  render() {
    return (
      <Fragment>
        <input type="text" onChange={this.handleInput} value={this.state.input}/>
        <button onClick={this.handleBtnClick} className='btn'>add</button>
        <ul>{this.getTodoItems()}</ul>
      </Fragment>
    );
  }
}

export default TodoList;

// note
// 1. 绑定点击事件：onClick={this.fn}
// 2. 定义数据：
/*  constructor (prop) {
      super(prop);
      this.state = {
        ...
    }
}*/
// 3. input值改变时会触发onChange，input.value绑定state数据（单向绑定state->input）
// 4. 修改state数据时，最好先复制一份副本，修改副本，再把副本赋值给state数据
// 5. 父组件传值：val=... ；子组件接收值：this.props.val
// 6. 代码优化：bind(this)写在constructor里面；解构赋值取this.props再使用；render中代码较多则抽成一个函数
// 7. 行内样式：style={{background: 'red', color: '#fff'}}
// 8. 绑定类名：className=''
// 9. React.Fragment：不保留根标签
