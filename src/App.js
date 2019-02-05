import React, { Component } from 'react';

class App extends Component {
  render() {
    return ( // jsx语法
      <div>
        Hello World
        1 + 2 = {1 + 2}
      </div>
    );
  }
}

export default App;

// note
// 1. {}内写表达式
// 2. /publish/mainfest.json：PWA下，定义程序信息
// 3. 引入React来编译使用jsx语法的语句
// 4. state不允许做任何改变
// 5. jsx内写注释：{/*....*/} 或 {
// ...
//                              }
// 6. dangerouslySetInnerHTML={{__html: ...}}：相当于 Vue 中的 v-html=...
// 7. label 标签的 for 属性应写为 htmlFor