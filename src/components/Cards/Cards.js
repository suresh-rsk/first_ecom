import './Cards.css'
import Modal from 'react-modal'
import { useState } from 'react';
import './Cards.css'
import { Redirect } from 'react-router';

const Cards = ({ name }) => {

    const [modalState, setModalState] = useState(false);

    const openModal = () => {
        setModalState(true)
    }

    const closeModal = () => {
        setModalState(false)
    }


    return (

        <div className="card" onClick={openModal}>
            <div className="cardImage">
                <img src={name.img} />
            </div><br />
            <div className="cardText">
                <p>{name.brand}</p>
                <p>{name.model}</p>
                <p>{name.price}</p>
            </div>
            <Modal isOpen={modalState} onRequestClose={closeModal}>
                <div className="close"><button onClick={closeModal}>X</button></div><br/>
                <div>
                <span className="modalimage"><img id="modalImage" src={name.img} /></span>
                <span className="modaltext">
                    <h2>Description</h2>
                    <p>uehqirfuh fwejhgwfejk wre fwigw giuewhj jfnkjw ejirf nlwekf hwjf  iwue gkjenv  iw niguew nviuwne iuwenv jkwnb bewiurfh hewuihneiwujk gnewui kjlsfnviwejkrgnewui  niuwjg weui nuweoirjgnewujkgneuijkgn ein wiuegniwjrk</p>
                    <br/>
                    <h2>Price</h2>
                    <h3>Rs.{name.price}</h3>

                    <button className="buy">Buy Now</button>
                    <button className="cart">Add to Cart</button>

                </span>
                </div>
            </Modal>

        </div>


    )
}

export default Cards;