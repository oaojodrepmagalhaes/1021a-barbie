 import'./Header.css'
 function Header(){
    return(
  
      <header className="ll">
      <div>
        <img className="imga" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Barbie_Logo.svg/2560px-Barbie_Logo.svg.png" alt=""></img>
        
      </div> 
      
       <div className="container-btn">
         
        <button className="ss"><a className="dd" href="#">home</a></button>
        <button className="ss"><a className="dd" href="#">noticia</a></button>
        <button className="ss"><a className="dd" href="#">sobre</a></button>
        <button className="ss"><a className="dd" href="#">contato</a></button>
      </div>
    </header>
    )

}

export default Header