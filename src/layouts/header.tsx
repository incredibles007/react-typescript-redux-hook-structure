import { useEffect, useState } from 'react';
import { useHistory } from "react-router-dom";
// import logo from './logo.svg';
// import './App.css';
import { LOCAL_STORAGE_KEY } from "../consts";
import { useUser } from "../store/hooks";

function Header() {
  const history = useHistory();
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [currentNav, setCurrentNav] = useState('');
  const { JWT_TOKEN } = LOCAL_STORAGE_KEY;
  const token = localStorage.getItem(JWT_TOKEN);
  const { logout, user, setUnreadTransaction, setUnreadMeeting } = useUser();

  // const navigationRef = useRef();
  const onHandleLogout = async (e: any) => {
    e.preventDefault();
    await logout();
    history.push('/');
  }

  const onLogo = (e: any) => {
    e.preventDefault();
    if (token || user.token)
      history.push('/profile/me');
    else
      history.push('/home');
  }
  const onLoginButton = (e: any) => {
    e.preventDefault();
    history.push("/auth/login");
  }

  const onProfileButton = (e: any) => {
    e.preventDefault();
    history.push("/profile/me");
  }

  // const onClientRegisterButton = () => {
  //   history.push("/client/signup");
  // }
  const onHireButton = (e: any) => {
    e.preventDefault();
    history.push('/client/post-job');
  }
  const onMeeting = (e: any) => {
    e.preventDefault();
    setUnreadMeeting(0);
    history.push("/meetings");
  }

  const onTickets = (e: any) => {
    e.preventDefault();
    history.push("/tickets");
  }

  const onTransaction = (e: any) => {
    e.preventDefault();
    setUnreadTransaction(0);
    history.push("/transaction");
  }

  const onFreelancerRegisterButton = (e: any) => {
    e.preventDefault();
    history.push("/freelancer/signup");
  }

  const onSetting = (e: any) => {
    e.preventDefault();
    history.push("/setting");
  }

  const handleScroll = () => {

  }

  // const showUserMenu = () => {
  //   if (isUserMenuOpen === true)
  //     setIsUserMenuOpen(false);
  //   else
  //     setIsUserMenuOpen(true);
  // }

  const handleClick = (e: any) => {
    setIsUserMenuOpen(false);
  }
  useEffect(() => {

    let curUrl = window.location.href;
    if (curUrl.includes('transactions')) { setCurrentNav('transactions'); }
    if (curUrl.includes('meeting')) { setCurrentNav('meeting'); }
    if (curUrl.includes('tickets')) { setCurrentNav('tickets'); }

    setTimeout(() => {
      window.addEventListener('click', handleClick);
    }, 0);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div>
      <header id="header-wrap" className="relative" onScroll={handleScroll}>
        <div id="navigation" className="navigation top-0 left-0 w-full z-30 duration-300 sticky">
          <div className="container">
            <nav className="navbar py-2 h-16 navbar-expand-lg flex justify-between items-center relative duration-300">
              <a className="navbar-brand flex" href="void(0)" onClick={onLogo}>
                <img src="../logo.png" className="h-12 w-12" alt="Logo"></img>
                <div className="logo-title">PLUSPORTFOLIO</div>
              </a>

              {token || user.token !== '' ?

                <div className="lg:flex sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0 items-center">
                  <div className="collapse navbar-collapse hidden lg:block duration-300 shadow absolute top-100 left-0 mt-full bg-white z-20 px-5 py-3 w-full lg:static lg:bg-transparent lg:shadow-none" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto justify-center items-center lg:flex">
                      <li className="nav-item flex items-center">
                        <a className={`page-scroll font-normal ${currentNav === 'meeting' ? 'active' : ''}`} href="void(0)" onClick={onMeeting}>MEETING</a>
                        {/* {user.user.unreadMeeting !== 0 && user.user.unreadMeeting !== undefined && (
                          <div
                            className='-ml-5 flex items-center justify-center w-5 h-5 rounded-full text-xs text-center bg-blue-500 text-white'
                          >
                            {user.user.unreadMeeting}
                          </div>
                        )} */}
                      </li>
                      <li className="nav-item flex items-center">
                        <a className={`page-scroll font-normal ${currentNav === 'transactions' ? 'active' : ''}`} href="void(0)" onClick={onTransaction}>TRANSACTIONS</a>
                        {user.user.unreadTransaction !== 0 && user.user.unreadTransaction !== undefined && (
                          <div
                            className='-ml-5 flex items-center justify-center w-5 h-5 rounded-full text-xs text-center bg-blue-500 text-white'
                          >
                            {user.user.unreadTransaction}
                          </div>
                        )}
                      </li>
                      <li className="nav-item">
                        <a className={`page-scroll font-normal ${currentNav === 'tickets' ? 'active' : ''}`} href="void(0)" onClick={onTickets}>TICKETS</a>
                      </li>
                      {user.user.user_role === "client" ?
                        <li className="nav-item">
                          <a className="primary-btn" href="void(0)" onClick={onHireButton}>Hire&nbsp;Now</a>
                        </li> : null
                      }
                    </ul>
                  </div>

                  <div className="relative">
                    <div>
                      <button type="button" onClick={(e) => {
                        e.stopPropagation();
                        setIsUserMenuOpen(!isUserMenuOpen);
                      }} className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-expanded="false" aria-haspopup="true">
                        <span className="sr-only">Open user menu</span>
                        {user.user.avatar === null ?
                          <img className="w-10 rounded-full" src="/assets/imgs/avatar.png" alt=""></img> :
                          <img className="w-10 rounded-full" src={process.env.REACT_APP_BASE_URL + user.user.avatar} alt=""></img>
                        }
                      </button>
                    </div>
                    {isUserMenuOpen ?
                      <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                        <a href="void(0)" onClick={onProfileButton} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Your Profile</a>
                        <a href="void(0)" onClick={onSetting} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                        <a href="void(0)" onClick={(e: any) => onHandleLogout(e)} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</a>
                      </div>
                      : ""}
                  </div>
                </div>
                :
                <div className=" sm:block sm:absolute sm:right-0 sm:mr-16 lg:static lg:mr-0">
                  <a className="text-black font-normal px-6 py-3 duration-300  hover:text-green-600" href="void(0)" onClick={onFreelancerRegisterButton}>Apply&nbsp;as&nbsp;a&nbsp;freelancer</a>
                  <a className="primary-btn" href="void(0)" onClick={onHireButton}>Hire&nbsp;Now</a>
                  <a onClick={onLoginButton} className="text-black font-normal px-6 py-3 duration-300  hover:text-green-600" href="void(0)">Log&nbsp;In</a>
                </div>
              }
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
