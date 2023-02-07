import Station from "./Station";
import Alert from "./Alert";
import { Component } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <div className="App-header">
            <ul>
              <Link to="./"><li>즐겨찾기</li></Link>
              <Link to="./alert"><li>알람목록</li></Link>
            </ul>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Station/>} />
          <Route path="/alert" element={<Alert/>} />
        </Routes>
      </BrowserRouter>
    )
  }
}