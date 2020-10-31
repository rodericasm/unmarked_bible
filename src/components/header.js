import React, { useState, useEffect } from "react"
import "../css/header.css"
import { Link, withPrefix  } from "gatsby"

const Header = ({ book_title, dll_txt }) => {
  var [light_mode, set_light_mode] = useState(true)

  useEffect(() => {
    var p = document.getElementsByTagName("p")
    var q = document.getElementsByTagName("q")
    var h1 = document.getElementsByTagName("h1")[0]
    var body = document.getElementsByTagName("body")[0]
    var svg = document.getElementsByTagName("svg")
    var nav = document.getElementsByClassName("nav_bar")[0]
    if (light_mode) {
      nav.style.background = "white"
      body.style.background = "white"
      h1.style.color = "#222"
      for (let v of p) {
        v.style.color = "#222"
      }
      for (let v of q) {
        v.style.color = "#222"
        v.style.borderBottom = "1px dotted #222"
      }
      for (let v of svg) {
        v.setAttribute("fill", "#222")
      }
    } else {
      nav.style.background = "#212121"
      body.style.background = "#212121"
      h1.style.color = "#e0e0e0"
      for (let v of p) {
        v.style.color = "#e0e0e0"
      }
      for (let v of q) {
        v.style.color = "#e0e0e0"
        v.style.borderBottom = "1px dotted #e0e0e0"
      }
      for (let v of svg) {
        v.setAttribute("fill", "#e0e0e0")
      }
    }
  }, [light_mode])

  return (
    <div className="nav_bar">
      <div className="nav_group">
        <Link to="/">
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-house-door"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 1.146a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 .146.354v7a.5.5 0 0 1-.5.5H9.5a.5.5 0 0 1-.5-.5v-4H7v4a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .146-.354l6-6zM2.5 7.707V14H6v-4a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v4h3.5V7.707L8 2.207l-5.5 5.5z"
            />
            <path
              fill-rule="evenodd"
              d="M13 2.5V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
            />
          </svg>
        </Link>
      </div>
      <h1>{book_title}</h1>

      <div className="nav_group">
        <svg
          onClick={() => set_light_mode(!light_mode)}
          width="1.5em"
          height="1.5em"
          viewBox="0 0 16 16"
          className="bi bi-lightning"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"
          />
        </svg>

        <a href={withPrefix("/") + "/bible_txt/" + dll_txt} download={dll_txt}>
          <svg
            width="1.5em"
            height="1.5em"
            viewBox="0 0 16 16"
            class="bi bi-file-earmark-arrow-down"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 0h5.5v1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h1V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2z" />
            <path d="M9.5 3V0L14 4.5h-3A1.5 1.5 0 0 1 9.5 3z" />
            <path
              fill-rule="evenodd"
              d="M8 6a.5.5 0 0 1 .5.5v3.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7.5 10.293V6.5A.5.5 0 0 1 8 6z"
            />
          </svg>
        </a>
      </div>
    </div>
  )
}

export default Header
