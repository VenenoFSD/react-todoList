import React, {Component} from 'react'

class TodoItem extends Component{

  constructor (props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick () {
    const {handleDelete, index} = this.props;
    handleDelete(index);
  }

  render() {
    const {content} = this.props;
    return(
      <li onClick={this.handleClick}>{content}</li>
    )
  }
}

export default TodoItem

// note
// 子组件向父组件传值：父组件传函数给子组件调用，子组件通过这个函数传值给父组件
