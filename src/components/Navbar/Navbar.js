import './Navbar.scss'
export default function Navbar(){
    return (
    <div className='navbar'>
        <div className='logo'>
            <div className='logo-icon'></div>
            <div className='logo-brand'>E-Commerse</div>
        </div>
        <div className='navbar-item'>ABOUT</div>
        <div className='navbar-item'>SERVICES</div>
        <div className='navbar-item'>CARD</div>
    </div>
    )
}