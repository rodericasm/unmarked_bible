import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"
import "../css/index.css"

const IndexPage = () => {
  return (
    <div className="home">
      <div className="index_bar">
        <h1>Unmarked Bible</h1>
        </div>
      <main>
        <SEO title="Home" />
        <h1>Table of Contents:</h1>
        <p>This is a continuous/unmitigated KJV version of the bible, no chapter breaks and verse marks. This unmarked ver., free of breaks, retains as closely, the original authors thought process, structure, rhythm and other literary affectations and devices, before breaks and markers were added in the 13th century.</p>
        <div className="bible_list">
          <section>
          <ul>
              <p>Old Testament</p>
              <li><Link to="/Genesis" className="bible_link">Genesis</Link></li>
              <li><Link to="/Exodus" className="bible_link">Exodus</Link></li>
              <li><Link to="/Leviticus" className="bible_link">Leviticus</Link></li>
              <li><Link to="/Numbers" className="bible_link">Numbers</Link></li>
              <li><Link to="/Deuteronomy" className="bible_link">Deuteronomy</Link></li>
              <li><Link to="/Joshua" className="bible_link">Joshua</Link></li>
              <li><Link to="/Judges" className="bible_link">Judges</Link></li>
              <li><Link to="/Ruth" className="bible_link">Ruth</Link></li>
              <li><Link to="/1 Samuel" className="bible_link">1 Samuel</Link></li>
              <li><Link to="/2 Samuel" className="bible_link">2 Samuel</Link></li>
              <li><Link to="/1 Kings" className="bible_link">1 Kings</Link></li>
              <li><Link to="/2 Kings" className="bible_link">2 Kings</Link></li>
              <li><Link to="/1 Chronicles" className="bible_link">1 Chronicles</Link></li>
              <li><Link to="/2 Chronicles" className="bible_link">2 Chronicles</Link></li>
              <li><Link to="/Ezra" className="bible_link">Ezra</Link></li>
              <li><Link to="/Nehemiah" className="bible_link">Nehemiah</Link></li>
              <li><Link to="/Esther" className="bible_link">Esther</Link></li>
              <li><Link to="/Job" className="bible_link">Job</Link></li>
              <li><Link to="/Psalms" className="bible_link">Psalms</Link></li>
            </ul>
          </section>
           
          <section>
            <ul>
            <li></li>
              <li><Link to="/Proverbs" className="bible_link">Proverbs</Link></li>
              <li><Link to="/Ecclesiastes" className="bible_link">Ecclesiastes</Link></li>
              <li><Link to="/Song of Solomon" className="bible_link">Song of Solomon</Link></li>
              <li><Link to="/Isaiah" className="bible_link">Isaiah</Link></li>
              <li><Link to="/Jeremiah" className="bible_link">Jeremiah</Link></li>
              <li><Link to="/Lamentations" className="bible_link">Lamentations</Link></li>
              <li><Link to="/Ezekiel" className="bible_link">Ezekiel</Link></li>
              <li><Link to="/Daniel" className="bible_link">Daniel</Link></li>
              <li><Link to="/Hosea" className="bible_link">Hosea</Link></li>
              <li><Link to="/Joel" className="bible_link">Joel</Link></li>
              <li><Link to="/Amos" className="bible_link">Amos</Link></li>
              <li><Link to="/Obadiah" className="bible_link">Obadiah</Link></li>
              <li><Link to="/Jonah" className="bible_link">Jonah</Link></li>
              <li><Link to="/Micah" className="bible_link">Micah</Link></li>
              <li><Link to="/Nahum" className="bible_link">Nahum</Link></li>
              <li><Link to="/Habakkuk" className="bible_link">Habakkuk</Link></li>
              <li><Link to="/Zephaniah" className="bible_link">Zephaniah</Link></li>
              <li><Link to="/Haggai" className="bible_link">Haggai</Link></li>
              <li><Link to="/Zechariah" className="bible_link">Zechariah</Link></li>
              <li><Link to="/Malachi" className="bible_link">Malachi</Link></li>
            </ul>
          </section>
          <section>
            <ul>
            <p>New Testament</p>
            <li><Link to="/Matthew" className="bible_link">Matthew</Link></li>
            <li><Link to="/Mark" className="bible_link">Mark</Link></li>
            <li><Link to="/Luke" className="bible_link">Luke</Link></li>
            <li><Link to="/John" className="bible_link">John</Link></li>
            <li><Link to="/Acts" className="bible_link">Acts</Link></li>
            <li><Link to="/Romans" className="bible_link">Romans</Link></li>
            <li><Link to="/1 Corinthians" className="bible_link">1 Corinthians</Link></li>
            <li><Link to="/2 Corinthians" className="bible_link">2 Corinthians</Link></li>
            <li><Link to="/Galatians" className="bible_link">Galatians</Link></li>
            <li><Link to="/Ephesians" className="bible_link">Ephesians</Link></li>
            <li><Link to="/Phillipians" className="bible_link">Phillipians</Link></li>
            <li><Link to="/Colossians" className="bible_link">Colossians</Link></li>

            </ul>
            </section>
            <section>
            <ul>
              <li></li>
              <li><Link to="/1 Thessalonians" className="bible_link">1 Thessalonians</Link></li>
            <li><Link to="/2 Thessalonians" className="bible_link">2 Thessalonians</Link></li>
            <li><Link to="/1 Timothy" className="bible_link">1 Timothy</Link></li>
            <li><Link to="/2 Timothy" className="bible_link">2 Timothy</Link></li>
            <li><Link to="/Titus" className="bible_link">Titus</Link></li>
            <li><Link to="/Philemon" className="bible_link">Philemon</Link></li>
            <li><Link to="/Hebrews" className="bible_link">Hebrews</Link></li>
              <li><Link to="/James" className="bible_link">James</Link></li>
            <li><Link to="/1 Peter" className="bible_link">1 Peter</Link></li>
            <li><Link to="/2 Peter" className="bible_link">2 Peter</Link></li>
            <li><Link to="/1 John" className="bible_link">1 John</Link></li>
            <li><Link to="/2 John" className="bible_link">2 John</Link></li>
            <li><Link to="/3 John" className="bible_link">3 John</Link></li>
            <li><Link to="/Jude" className="bible_link">Jude</Link></li>
            <li><Link to="/Revelation" className="bible_link">Revelation</Link></li>
            </ul>
            </section>
        </div>
      </main>
    </div>
  );
}

export default IndexPage
