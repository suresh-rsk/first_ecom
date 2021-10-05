import Computers from '../Computers'
import Cards from '../Cards/Cards'


const ComputerSection = ()=>{
    
    return(
        <div className="main">
            <div className="heading">
                <h2>Latest Laptops</h2>
            </div>
            <div id="cardsView">
                {Computers.map(i=><Cards name={i}/>)}
            </div>

            <div className="heading">
                <h2>Gaming Laptops</h2>
            </div>
            <div id="cardsView">
                {Computers.map(i=><Cards name={i}/>)}
            </div>

            <div className="heading">
                <h2>Desktop PCs</h2>
            </div>
            <div id="cardsView">
                {Computers.map(i=><Cards name={i}/>)}
            </div>
        
       </div>
       
         )
}

export default ComputerSection;