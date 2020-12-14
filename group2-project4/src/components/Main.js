import React from 'react'
import "./Main.css";


export default function Main() {
    return (
        <div className="main-container">
          <ul className='list-inline'>
             <li className='book'>
                 <img src='http://37signals.com/images/remote/remote_front.png' />
             </li>

             <li className='book'>
                 <img src='http://www.blanq.org/text/moleskine_iphone_wallpaper.jpg' />
             </li>

             <li className='book'>
                 <img src='https://d.gr-assets.com/books/1348927776l/8032112.jpg' />
             </li>

             <li className='book'>
                 <img src='http://ecx.images-amazon.com/images/I/51oXKWrcYYL.jpg' />
             </li>
           </ul>
        </div>
    )
}
