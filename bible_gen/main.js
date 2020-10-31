const csv = require("csv-parser")
const fs = require("fs")
var obj_name = "Genesis"
var current_book = "Genesis" //init book
var current_string = ""
var js_template

fs.createReadStream("bible.csv")
  .pipe(csv())
  .on("data", row => {
    if (current_book === row[Object.keys(row)[0]].match(/(.+?)[a-zA-Z]+/)[0]) {
      current_string += row["King James Bible"] + " \n"
    } else {
      if (!isNaN(Number(current_book.charAt(0)))) {
        obj_name =
          current_book.match(/[a-zA-Z]+/)[0] + "_" + current_book.charAt(0)
      } else {
        obj_name = current_book.match(/(.+?)[a-zA-Z]+/)[0]
      }

      js_template = `
        import React from 'react';
        import Book_layout from "../components/book_layout"
        import SEO from "../components/seo"
 

        const ${obj_name} = () => (
        <Book_layout dll_txt="${current_book}.txt" book_title="${current_book} (KJV)">
            <SEO title="${current_book}" />
            <p>
            ${current_string}
            </p>
        </Book_layout>
        )

        export default ${obj_name}
        `

      fs.writeFile(`../src/pages/${current_book}.js`, js_template, function (
        err
      ) {
        if (err) {
          return console.log(err)
        }
      })
      fs.writeFile(
        `../static/bible_txt/${current_book}.txt`,
        current_string,
        function (err) {
          if (err) {
            return console.log(err)
          }
        }
      )
      current_string = row["King James Bible"] + " \n"
      current_book = row[Object.keys(row)[0]].match(/(.+?)[a-zA-Z]+/)[0]
    }
  })
  .on("end", () => {
    js_template = `
    import React from 'react';
    import Book_layout from "../components/book_layout"
    import SEO from "../components/seo"

    const ${obj_name} = () => (
    <Book_layout book_title="${current_book}">
        <SEO title="${current_book}" />
        <p>
        ${current_string}
        </p>
    </Book_layout>
    )

    export default ${obj_name}
    `

    fs.writeFile(`../src/pages/${current_book}.js`, js_template, function (
      err
    ) {
      if (err) {
        return console.log(err)
      }
    })
    fs.writeFile(
      `../static/bible_txt/${current_book}.txt`,
      current_string,
      function (err) {
        if (err) {
          return console.log(err)
        }
      }
    )
    current_string = ""
  })
