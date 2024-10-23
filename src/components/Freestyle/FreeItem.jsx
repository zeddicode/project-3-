
import React from 'react'
import './FreeItem.css'
import img1 from '../../assets/13promax-removebg-preview(1).png'
import img2 from '../../assets/13_128_-removebg-preview (1).png'
import img3 from '../../assets/14-removebg-preview.png'
import img4 from '../../assets/14----removebg-preview.png'
import image1 from '../../assets/laptop-5673901_1280.jpg'
import image2 from '../../assets/macbook2.jpg'
import image3 from '../../assets/png-transparent-macbook-pro-laptop-apple-laptop-electronics-computer-laptop-removebg-preview.png'
import applelogo from '../../assets/icons8-apple-24.png'
import { Link } from 'react-router-dom'
import series7 from '../../assets/Apple_Watch_Series_9_GPS_41mm_Midnight_Aluminum_Midnight_Sport_Band_PDP_Image_Position-1__WWEN_5000x.webp'
import series8 from '../../assets/Apple_Watch_Series_9_GPS_41mm_Starlight_Aluminum_Starlight_Sport_Loop_PDP_Image_Position-1__WWEN_5000x.webp'
import series9 from '../../assets/Apple_Watch_Series_9_GPS_45mm_PRODUCTRED_Aluminum_PRODUCTRED_Sport_Band_PDP_Image_Position-1__WWEN_5000x.webp'
import SE from '../../assets/Apple_Watch_Series_9_GPS_45mm_Starlight_Aluminum_Starlight_Sport_Band_PDP_Image_Position-1__WWEN_5000x.webp'
import { AppleLogo } from 'phosphor-react'


const FreeItem = () => {
  return (
    <div className='freeItem'>
               <h3>Shop Our iPhone latest deals ...</h3>
        <div className='phoneItem'>
        <div className="phonebox">
            <img src={img1} alt="" />
            <div className="boxInfo">
            <h2>
            <img src={applelogo} alt="" />
                iPhone 16 Promax</h2>
            <p>₦1,200,000</p>
            <Link to={'/apple'}> <button >Buy now</button></Link>

            </div>
        </div>
        <div className="phonebox">
            <img src={img2} alt="" />
            <div className="boxInfo">
            <h2>               
            <img src={applelogo} alt="" />
            iPhone 16 Promax</h2>
            <p>₦1,200,000</p>
            <Link to={'/apple'}> <button >Buy now</button></Link>
            </div>
        </div>
        <div className="phonebox">
            <img src={img3} alt="" />
            <div className="boxInfo">
            <h2>               
            <img src={applelogo} alt="" />
            iPhone 16 Promax</h2>
            <p>₦1,200,000</p>
            <Link to={'/apple'}> <button >Buy now</button></Link>
            </div>
        </div>
        <div className="phonebox">
            <img src={img4} alt="" />
            <div className="boxInfo">
            <h2>             
            <img src={applelogo} alt="" />
            iPhone 16 Promax</h2>
            <p>₦1,200,000</p>
            <Link to={'/apple'}> <button >Buy now</button></Link>
            </div>
        </div>
        </div>
        <h3>Welcome to the best of MacBook Experience...</h3>
        <div className="laptop">
        <div className="macbook">
            <img src={image1} alt="" />
            <div className="bookinfo">
                <h2>
                <AppleLogo />
                Macbook M2 527GB</h2>
                <p>₦900,000</p>
                <Link to={'/samsung'}> <button >Shop now</button></Link>
                </div>
        </div>
        <div className="macbook">
            <img src={image2} alt="" />
            <div className="bookinfo">
                <h2>
                <AppleLogo />
                Macbook M2 527GB</h2>
                <p>₦900,000</p>
                <Link to={'/samsung'}> <button >Shop now</button></Link>
                </div>
        </div>
        <div className="macbook">
            <img src={image3} alt="" />
            <div className="bookinfo">
                <h2>
                <AppleLogo />
                Macbook M2 527GB</h2>
                <p>₦900,000</p>
                <Link to={'/samsung'}> <button >Shop now</button></Link>
                </div>
        </div>
        </div>
        <h3>Powerful Accessories for splendid baffog</h3>
        <div className="iWatches">
            <div className="iwatch">
                <img src={series9} alt="" />
                <div className="iwatchinfo">
                    <h2>
                    <img src={applelogo} alt="" />
                    iWatch Series 9</h2>
                    <p>₦200,000</p>
                    <Link to={'/wears'}> <button >Shop now</button></Link>
                    </div>
            </div>
            <div className="iwatch">
                <img src={series8} alt="" />
                <div className="iwatchinfo">
                    <h2>
                    <img src={applelogo} alt="" />
                    iWatch Series 9</h2>
                    <p>₦200,000</p>
                    <Link to={'/wears'}> <button >Shop now</button></Link>
                    </div>
            </div>
            <div className="iwatch">
                <img src={series7} alt="" />
                <div className="iwatchinfo">
                    <h2>
                    <img src={applelogo} alt="" />
                    iWatch Series 9</h2>
                    <p>₦200,000</p>
                    <Link to={'/wears'}> <button >Shop now</button></Link>
                    </div>
            </div><div className="iwatch">
                <img src={SE} alt="" />
                <div className="iwatchinfo">
                    <h2>
                    <img src={applelogo} alt="" />
                    iWatch Series 9</h2>
                    <p>₦200,000</p>
                    <Link to={'/wears'}> <button >Shop now</button></Link>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default FreeItem 
