import React from "react"
//import  "./assets/css/style.scss"
import style from "../../assets/css/style.scss"
class App extends React.Component {
  // state初始化一般写在构造器当中
  constructor(haha) {
    super(haha) // 继承调用父类的constructor this.props
    //console.log(this.getState())
  }
  changeOtherClassName() {
    let name = ["Guo", "Jack", "Peter", "Pan", "Hu", "Xu", "Hao"]
    name.sort((i) => (Math.random() > 0.5 ? "-1" : "1"))
    let arr = {
      name: name.slice(0, 1),
    }
    this.props.getChildname(arr)
  }
  changeMyClass() {
    let arrList = [
      { id: 1, text: "Guo" },
      { id: 2, text: "jack" },
      { id: 3, text: "peter" },
      { id: 4, text: "emily" },
      { id: 5, text: "jack" },
      { id: 6, text: "peter" },
      { id: 7, text: "Pan" },
      { id: 8, text: "Hu" },
      { id: 9, text: "Xu" },
      { id: 10, text: "Lin" },
    ]
    arrList.sort((i) => (Math.random() > 0.5 ? "-1" : "1"))
    arrList = arrList.slice(0, 5)
    console.log(arrList)
    let arr = {
      name: "我来自三(3)班",
      list: arrList,
    }
    this.props.getcopydata(arr)
    // this.state.myclass = "三(1)"
  }
  render() {
    return (
      <div>
        <h3>组件B Siblings class --- {this.props.name}</h3>
        <button onClick={this.changeMyClass.bind(this)}>随机复制班级</button>
        <button
          style={{ marginLeft: "15px" }}
          onClick={this.changeOtherClassName.bind(this)}
        >
          随机改变上面"组件A"的班级名称
        </button>
        <div>
          {this.props.copylist.map((item, i) => (
            <li key={item.id}>{item.text}</li>
          ))}
        </div>
      </div>
    )
  }
}

export default App
