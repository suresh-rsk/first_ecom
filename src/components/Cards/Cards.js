import './Cards.css'


const Cards=({name})=>{
       
    return(

        <div className="card">
            <div className="cardImage">
                <img src={name.img}/>
            </div><br/>
            <div className="cardText">
                <p>{name.brand}</p>
                <p>{name.model}</p>
                <p>{name.price}</p>
            </div>

           
        </div>
        

    )
}

export default Cards;