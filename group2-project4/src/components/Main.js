import React from 'react'
import "./Main.css";


export default function Main() {
    return (
        <div className="main-container">
            <div className="logo"><b>G<span>ro</span>up<span>2</span><span> </span>Lib<span>ra</span>ry</b></div>
          <div className="book-container">
             <ul className='list-inline'>
                 <li className='book'>
                     <img src='http://37signals.com/images/remote/remote_front.png' alt="pic" />
                  </li>

                  <li className='book'>
                     <img src='http://www.blanq.org/text/moleskine_iphone_wallpaper.jpg' alt="pic"/>
                  </li>

                  <li className='book'>
                     <img src='https://d.gr-assets.com/books/1348927776l/8032112.jpg' alt="pic"/>
                  </li>

                  <li className='book'>
                     <img src='http://ecx.images-amazon.com/images/I/51oXKWrcYYL.jpg' alt="pic"/>
                  </li>
              </ul>
           {/*End of first book row*/}
           
        </div>
     </div>
    )
}
