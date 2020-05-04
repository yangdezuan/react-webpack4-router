import React from "react"
//import  "./assets/css/style.scss"
class App extends React.Component {
  constructor(haha) {
    super(haha) // 继承调用父类的constructor this.props

    this.state = {
      name: "jack yang",
    }
    //console.log(this.getState())
  }
  render() {
    return (
      <div className="box" style={{ fontSize: "14px" }}>
        test User
      </div>
    )
  }
}

export default App
