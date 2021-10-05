import Mobiles from '../Mobiles'
import Cards from '../Cards/Cards'
import './MobileSection.css'

const MobileSection = ()=>{
    
    return(
        <div className="main">
            <div className="heading">
                <h2>Latest Mobiles</h2>
            </div>
            <div id="cardsView">
                {Mobiles.map(i=><Cards name={i}/>)}
            </div>

            <div className="heading">
                <h2>Top Selling Mobiles</h2>
            </div>
            <div id="cardsView">
                {Mobiles.map(i=><Cards name={i}/>)}
            </div>

            <div className="heading">
                <h2>Premium mobiles</h2>
            </div>
            <div id="cardsView">
                {Mobiles.map(i=><Cards name={i}/>)}
            </div>
        
       </div>
       
         )
}

export default MobileSection;