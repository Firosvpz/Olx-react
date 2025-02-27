// import React,{useContext} from 'react';
// import { useHistory } from 'react-router-dom';
// import './Header.css';
// import OlxLogo from '../../assets/OlxLogo';
// import Search from '../../assets/Search';
// import Arrow from '../../assets/Arrow';
// import SellButton from '../../assets/SellButton';
// import SellButtonPlus from '../../assets/SellButtonPlus';
// import { AuthContext, firebaseContext } from '../../store/Context';
// function Header() {
//   const history = useHistory()
//   const {user} = useContext(AuthContext) 
//   const {firebase} = useContext(firebaseContext)
//   return (
//     <div className="headerParentDiv">
//       <div className="headerChildDiv">
//         <div className="brandName">
//           <OlxLogo></OlxLogo>
//         </div>
//         <div className="placeSearch">
//           <Search></Search>
//           <input type="text" />
//           <Arrow></Arrow>
//         </div>
//         <div className="productSearch">
//           <div className="input">
//             <input
//               type="text"
//               placeholder="Find car,mobile phone and more..."
//             />
//           </div>
//           <div className="searchAction">
//             <Search color="#ffffff"></Search>
//           </div>
//         </div>
//         <div className="language">
//           <span> ENGLISH </span>
//           <Arrow></Arrow>
//         </div>
//         <div className="loginPage">
//           <span>{user ? `Welcome ${user.displayName}` : "Login"}</span>
//           <hr />
//         </div>
//         {user && <span onClick={()=>{
//           firebase.auth().signOut();
//           history.push('/login')
//         }}>Logout</span>}


//         <div className="sellMenu">
//           <SellButton></SellButton>
//           <div className="sellMenuContent">
//             <SellButtonPlus></SellButtonPlus>
//             <span>SELL</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


// import React, { useContext } from 'react';
// import { useHistory } from 'react-router-dom';
// import './Header.css';
// import OlxLogo from '../../assets/OlxLogo';
// import Search from '../../assets/Search';
// import Arrow from '../../assets/Arrow';
// import SellButton from '../../assets/SellButton';
// import SellButtonPlus from '../../assets/SellButtonPlus';
// import { AuthContext, firebaseContext } from '../../store/Context';

// function Header() {
//   const history = useHistory();
//   const { user } = useContext(AuthContext);
//   const { firebase } = useContext(firebaseContext);

//   const handleLoginClick = () => {
//     history.push('/login');
//   };

//   return (
//     <div className="headerParentDiv">
//       <div className="headerChildDiv">
//         <div className="brandName">
//           <OlxLogo></OlxLogo>
//         </div>
//         <div className="placeSearch">
//           <Search></Search>
//           <input type="text" />
//           <Arrow></Arrow>
//         </div>
//         <div className="productSearch">
//           <div className="input">
//             <input
//               type="text"
//               placeholder="Find car, mobile phone and more..."
//             />
//           </div>
//           <div className="searchAction">
//             <Search color="#ffffff"></Search>
//           </div>
//         </div>
//         <div className="language">
//           <span> ENGLISH </span>
//           <Arrow></Arrow>
//         </div>
//         <div className="loginPage">
//           <button onClick={handleLoginClick}>
//             {user ? `Welcome ${user.displayName}` : "Login"}
//           </button>
//           <hr />
//         </div>
//         {user && (
//           <span onClick={() => {
//             firebase.auth().signOut();
//             history.push('/login');
//           }}>Logout</span>
//         )}
//         <div className="sellMenu">
//           <SellButton></SellButton>
//           <div className="sellMenuContent">
//             <SellButtonPlus></SellButtonPlus>
//             <span>SELL</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;


import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, firebaseContext } from '../../store/Context';

function Header() {
  const history = useHistory();
  const { user } = useContext(AuthContext);
  const { firebase } = useContext(firebaseContext);

  const handleLoginClick = () => {
    history.push('/login');
  };

  const handleSellClick = () => {
    history.push('/create'); // Redirect to the create page
  };

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car, mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <button onClick={handleLoginClick}>
            {user ? `Welcome ${user.displayName}` : "Login"}
          </button>
          <hr />
        </div>
        {user && (
          <span onClick={() => {
            firebase.auth().signOut();
            history.push('/login');
          }}>Logout</span>
        )}
        <div className="sellMenu">
          <SellButton onClick={handleSellClick}></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span onClick={handleSellClick}>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
