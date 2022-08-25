import './navbar.css';
import data from './data';
import logo from './logo.svg'
import MenuItem from './MenuItem.js';
import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { FaTimes } from 'react-icons/fa';



export default function Navbar(){

    const [aktifmenu, setAktifmenu] = useState(data[0]);
    const [solhiza, setsolhiza] = useState("-400px");
    const [gorunurluk, setgorunurluk] = useState(0);
    const [menugoster, setmenugoster] = useState(false);

    const [modalgoster, setModalgoster] = useState(false);
    // const [hamburgerGoster, setHamburgerGoster] = useState(false);
    

    // console.log(data[0]);

    return(
        <div className='navbarCover'>
            <img className='logoImg' src={logo} alt="logo"/>
            
                <div className='hamburgermenu' onClick={()=>{ setModalgoster(true);} }>
                    <HiMenu/>
                </div> 



                {modalgoster ? <div className='alternativeMenuCover'>
                        <div className='ampanel'>
                        <FaTimes className='modalClose' onClick={()=>{
                            setModalgoster(false);
                        }}/>

                        {data.map((item, index)=>{
                            return <div className='misubmenu' >

                                <p className='subitemHeader'>{item.page}</p>

                                <div className='secondCover'>
                                    {item.links.map((sitem,index)=>{
                                        return <a className='subitem' key = {index} href={sitem.url}><span className='siicon'>{sitem.icon}</span> <span className='silabel'>{sitem.label}</span></a>
                                    })}
                                </div>

                            </div>

                        })}


                        </div>
                    </div> : ""}






            <div className='navMenu' onMouseLeave={()=>{
                setgorunurluk(0)
            }}>

                {data.map((item, index)=>{
                    return <MenuItem key={index} item={item} setAktifmenu={setAktifmenu} setsolhiza={setsolhiza} setmenugoster={setmenugoster} setgorunurluk={setgorunurluk}/>
                })}
                        {/* {console.log(solhiza)} */}

                   <div className='misubmenu' style={{left: solhiza, opacity:gorunurluk}} >

                        <div className='ucgen'></div>

                        <p className='subitemHeader'>{aktifmenu.page}</p>

                        <div className='secondCover'>
                            {aktifmenu.links.map((sitem,index)=>{
                                return <a className='subitem' key = {index} href={sitem.url}><span className='siicon'>{sitem.icon}</span> <span className='silabel'>{sitem.label}</span></a>
                            })}
                        </div>

                    </div> 


            </div>

            <button className='signinBtn'>Sign In</button>
        </div>
    )
}