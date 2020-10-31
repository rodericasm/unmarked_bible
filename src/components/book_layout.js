/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header"
import "../css/book_layout.css"

const Book_layout = ({ children, book_title, dll_txt }) => {
  return (
    <div className="book">
      <Header dll_txt={dll_txt} book_title={book_title} />
      <main>{children}</main>
    </div>
  )
}

Book_layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Book_layout
