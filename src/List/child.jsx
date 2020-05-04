import React from "react"
//import  "./assets/css/style.scss"
import style from "../../assets/css/style.scss"
class App extends React.Component {
  // state初始化一般写在构造器当中
  constructor(haha) {
    super(haha) // 继承调用父类的constructor this.props
    //console.log(this.getState())
  }
  changeMyClass() {
    let arr = {
      name: "我来自三(1)班",
      list: [
        { id: 1, text: "wang" },
        { id: 2, text: "yang" },
        { id: 3, text: "li" },
      ],
    }
    this.props.getdata(arr)
    // this.state.myclass = "三(1)"
  }
  render() {
    return (
      <div>
        <h3>组件A Child List --- {this.props.clildname}</h3>
        <button onClick={this.changeMyClass.bind(this)}>切换班级</button>
      </div>
    )
  }
}

export default App
