import './StarShips.css'

function Header(props) {
    return(
     <div className="container">
        <div className="cards">
           <h2>{props.name}</h2>
        </div>
     </div>
    )
}

export default Header