import { useNavigate, useLocation } from 'react-router-dom'
import { ReactComponent as OfferIcon } from '../assets/svg/localOfferIcon.svg'
import { ReactComponent as ExploreIcon } from '../assets/svg/exploreIcon.svg'
import { ReactComponent as PersonOutlineIcon } from '../assets/svg/personOutlineIcon.svg'

function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  return (
    <div className='navbar'>
      <nav className='navbarNav'>
        <div className='nav-title'onClick={() => navigate('/')} >
          Windy Homes !
        </div>
        <ul className='navbarListItems'>
          <li className='navbarListItem' onClick={() => navigate('/')}>
            <ExploreIcon
              fill={pathMatchRoute('/') ? '#2c2c2c' : '#8f8f8f'}
              width='30px'
              height='30px'
              margin
            />
            <p
              className={
                pathMatchRoute('/')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Explore
            </p>
          </li>
          {/* <li className='navbarListItem' onClick={() => navigate('/offers')}>
            <OfferIcon
              fill={pathMatchRoute('/offers') ? '#2c2c2c' : '#8f8f8f'}
              width='30px'
              height='30px'
            />
            <p
              className={
                pathMatchRoute('/offer')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Offers
            </p>
          </li> */}
          <li className='navbarListItem' onClick={() => navigate('/profile')}>
            <PersonOutlineIcon
              fill={pathMatchRoute('/profile') ? '#2c2c2c' : '#8f8f8f'}
              width='30px'
              height='30px'
            />
            <p
              className={
                pathMatchRoute('/profile')
                  ? 'navbarListItemNameActive'
                  : 'navbarListItemName'
              }
            >
              Profile
            </p>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
