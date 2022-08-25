import './hero.css';
import phone from './phone.svg';


export default function Hero(){

    return(
        <div className='heroCover'>
            <div className='leftSide'>
                <p className='heroheader'>Payments infrastructure for the internet</p>
                <p className='heroContext'>Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses online.</p>
                <button className='heroBtn'>Start Now</button>
            </div>

            <div className='rightSide'>
                <img className='phoneimg' src={phone} alt="hero"/>
            </div>
        </div>
    )
}