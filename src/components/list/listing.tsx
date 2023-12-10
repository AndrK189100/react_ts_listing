import './listing.css'
import { offer } from '../../offers'

export default function Listing({offers}: {offers:offer[]}) {
    
    return (
        <div className="item-list">
            {
                offers.map((offer: offer) => {
                    return(
                        <div key={offer.listing_id} className='item'>
                            <div className='item-image'>
                                <a href={offer.url}>
                                    <img src={Object(offer.MainImage).url_570xN}></img>
                                </a>
                            </div>
                            <div className="item-details">
                                <p className="item-title">{String(offer.title).length <= 50 ? offer.title : String(offer.title).slice(0,50) + '...'}</p>
                                <p className="item-price">{
                                        offer.currency_code === 'USD' ? '$'+ offer.price  : offer.currency_code === 'EUR' ? '€'+ offer.price : offer.price + ' ' + offer.currency_code
                                    }
                                </p>
                                {
                                    offer.quantity > 20 ? <p className=' item-quantity level-high'>{offer.quantity} left</p> : offer.quantity > 10 ? 
                                        <p className='item-quantity level-medium'>{offer.quantity} left</p> : <p className='item-quantity level-low'>{offer.quantity} left</p>
                                }
                                                           
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}