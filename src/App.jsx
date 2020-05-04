import React from "react"
//import  "./assets/css/style.scss"
import style from "../assets/css/style.scss"
class App extends React.Component {
  constructor(haha) {
    super(haha) // 继承调用父类的constructor this.props
    console.log("**test haha**", this.haha, haha == this.props)

    this.state = {
      name: "jack yang",
    }
    //console.log(this.getState())
  }
  render() {
    return (
      <div className="box" style={{ fontSize: "14px" }}>
        Hello
        <span className="hl">{this.state.name}!!!</span>
        <br />
        欢迎来到react js教程学习！！！
      </div>
    )
  }
}

export default App
