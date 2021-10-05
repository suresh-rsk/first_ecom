import Accessory from '../Accessories'
import Cards from '../Cards/Cards'


const Accessories = ()=>{
    
    return(
        <div className="main">
            <div className="heading">
                <h2>Headphones</h2>
            </div>
            <div id="cardsView">
                {Accessory.map(i=><Cards name={i}/>)}
            </div>

            <div className="heading">
                <h2>Storage Devices</h2>
            </div>
            <div id="cardsView">
                {Accessory.map(i=><Cards name={i}/>)}
            </div>

            <div className="heading">
                <h2>Powerbanks</h2>
            </div>
            <div id="cardsView">
                {Accessory.map(i=><Cards name={i}/>)}
            </div>
        
       </div>
       
         )
}

export default Accessories;