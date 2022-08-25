import './menuitem.css';


export default function MenuItem(props){
    // const {page, url, links, icon, label} = props.item;
    return( <span 
        className='menuItem' 

        onMouseMove={(e)=>{
            props.setgorunurluk(1);
            props.setAktifmenu(props.item);
            props.setsolhiza( (e.target.getBoundingClientRect().width / 2) +  e.target.getBoundingClientRect().x  + "px");
        }}
        // onMouseLeave={(e)=>{props.setsolhiza( "-300px")}}
        // onMouseOut={(e)=>{props.setgorunurluk(0)}}
        
        
        >{props.item.page}</span>)
} // fonksiyon sonu