import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { BiSearchAlt } from 'react-icons/bi'
import { useRef } from "react"
import { AiOutlineArrowDown } from 'react-icons/ai'


import doge from '../Images/doge1.png'
import shibaInu from '../Images/shiba_inu.gif'


import { Container,Nav } from "./index.style"
import { UserAdmin } from "../UserAdmin"


import { Baby } from '../List Products/baby'
import { Furniture } from '../List Products/furniture'
import { Sport } from '../List Products/sport'
import { Toys } from '../List Products/toys'
import { Beauty } from '../List Products/beauty'
import { Book } from '../List Products/book'
import { Electronics } from '../List Products/electronics'
import { Groceries } from '../List Products/groceries'
import { FemaleCloth } from '../List Products/female_clothing'
import { MenCloth } from '../List Products/men_clothing'
import { Jewelery } from '../List Products/jewelery'
import { Apparel } from '../Apparel/apparels'






import { GoHome } from 'react-icons/go'
import { GiClothes } from 'react-icons/gi'
import { GiJewelCrown } from 'react-icons/gi'
import { BiDevices } from 'react-icons/bi'
import { GiBabyBottle } from 'react-icons/gi'
import { MdSportsSoccer } from 'react-icons/md'
import { GiWoodenChair } from 'react-icons/gi'
import { FiShoppingCart } from 'react-icons/fi'
import { BsFillPersonFill } from 'react-icons/bs'
import { User } from '../User/user'
import { Cart } from '../Cart/cart'
import { Order } from '../Order/order'
import { Categories } from '../Categories/categories'

// Get All products 
import { AllProducts } from '../AllProducts'
import styled from 'styled-components'
import { Buy } from '../Buy/buy'
// Footer



export const Home = ()=>{




   let navigate = useNavigate()

   const sideNav = useRef('')

   function openNav() {
      sideNav.current.style.width = "300px";
   }
   
   function closeNav() {
       sideNav.current.style.width = "0"
   }
   



   const text = sessionStorage.getItem('username')===null ? 'Sign in!' : sessionStorage.getItem('username')

   let SignText = sessionStorage.getItem('token') !== null ? 'LogOut' : 'SignIn'
   const signIn = ()=>{
      navigate('/auth')
   }
   const signOut = ()=>{
     sessionStorage.clear();
     navigate('/')
   }
  


   // Use params



   // Get total productNo in cart
   const cartTotal = ()=>{

      const products = sessionStorage.getItem("productIds")
      if(products === null) {
         return 0
      }
      else {
         const productId = products.split(',')
         return productId.length-1
      }

   }

   const home = useParams()['*']

   const Intro = styled.div`
      width: 100%;
      height: 100vh;
      background: url(${shibaInu});
      background-repeat: no-repeat;
      background-size: cover;
      display: grid;
      justify-content: center;
      align-items: center;
      background-position-x: 40%;

      @media(min-width: 1400px) {
         background-position-y:30%; 
      }

      div {

         font-size: 2rem;
         width: 300px;
         display: flex;
         flex-direction: column;

         button {
            background: transparent;
            padding: 1.3rem;
            color: white;
            font-size: 5rem;
            cursor: pointer;
            border: none;


            .top-icon {
               animation: float 2s infinite;black
           }
   
           @keyframes float {
               0% {
                   transform: translateY(0px);
               }
               50% {
                   transform: translateY(20px);
               }
               100% {
                   transform: translateY(0px);
               }

         }
      }
   `

   return (

      <Container logo={ sessionStorage.getItem('image') === null ? doge : sessionStorage.getItem('image') } >


         {
            home === "" ?<Intro>

               <div>

                  <h1 style={{ color: "white" }}>ようこそ</h1>
                  <button
                  onClick={
                     ()=> {
     
                         window.scrollTo({
                             top: 900,
                             behavior: "smooth"
                         })
     
                     }
     
                 }
                  ><AiOutlineArrowDown className='top-icon'/></button>

               </div>

            </Intro> : ""
         }

         {/* Side Nav */}
         

         
         <div id="mySidenav" class="sidenav" ref={sideNav}>
         
         <div className="sign-logo" style={{  background: 'rgb(0,0,0,.4)' }} >
            <div className="logo"></div>
            <h4>{text}</h4>
            <button class="closebtn" onClick={closeNav}>&times;</button>
         </div>
         <li onClick={ ()=> navigate('/') } >Home <GoHome className='home' />  </li>
         <li style={{color: 'orange',fontWeight: 'bold',}} onClick={ ()=> navigate('/categories') } >List Categories</li>
         <li onClick={ ()=>navigate('/Apparel') }>Apparels <GiClothes className='nav-icon' /> </li>
         <li onClick={ ()=> navigate('/Jewelery') } >Jewelery <GiJewelCrown className='nav-icon'  /> </li>
         <li onClick={ ()=> navigate('/Electronics') } >Electronics <BiDevices  className='nav-icon' /> </li>
         <li onClick={ ()=> navigate('/Furniture') } >Furniture <GiWoodenChair className='nav-icon' /> </li>
         <li onClick={ ()=> navigate('/Sport') } >Sports <MdSportsSoccer className='nav-icon' /> </li>
         <li onClick={ ()=> navigate('/Baby') } >Baby products <GiBabyBottle className='nav-icon' /> </li>
         <p className='signUp' style={{ background: 'rgb(0,0,0,.4)', borderRadius: '10px', textAlign: 'center',fontSize: '2rem', padding: '1.5rem',color: 'orange',cursor: 'pointer' }} onClick={ sessionStorage.getItem('token')!==null ? signOut : signIn}>{SignText}</p>
         
         
         </div>
         
         
         
         
         <header>
            <div className='logo'>
            <div className="doge-logo"></div>
               <h2>DogeEcommerce</h2> 
            </div>
            <div className='shop'>
             <h3 onClick={ ()=> {
                  if(sessionStorage.getItem('token')=== null) {
                     alert('Pls sign in to access Order page!')
                     return
                  }
                  navigate('/order')
             } } >Order</h3>

            <div>
                   <BsFillPersonFill className='person' onClick={ ()=> {

                  if(sessionStorage.getItem('token')=== null) {
                     alert('Pls sign in to access user profile!')
                     return
                  }
                  navigate('/user')
             } } />
            </div>
            

             <div className='Cart'> 
                <span>

                     {
                        
                        cartTotal()

                     }

                </span>
             <FiShoppingCart className='cart' onClick={ ()=> {
                  if(sessionStorage.getItem('token')=== null) {
                     alert('Pls sign in to access the Cart!')
                     return 
                  }
                  navigate('/cart')
             } } />
             </div>

            </div>
      
         </header>
         <Nav>
            <div className="ham-menu" onClick={openNav}>
               <div className="stick"></div>
               <div className="stick"></div>
               <div className="stick"></div>
            </div>

           <div class="search-box">
           <button class="btn-search"><BiSearchAlt className="search"/></button>
           <input type="text" class="input-search" placeholder="Type to Search..."/>
           </div>


         </Nav>




 

         <Routes>
            <Route path="buy/:id/:total/:title/:price" element={ <Buy /> } />
            <Route path="" element={ <AllProducts /> } />
            <Route path="userAdmin" element={ <UserAdmin /> } />
            <Route path="user" element={ <User /> } />
            <Route path="cart" element={ <Cart /> } />
            <Route path="order" element={ <Order /> } />
            <Route path="categories" element={ <Categories /> } />

             {/* All Product links */}

            <Route path="Electronics" element={ <Electronics /> } />
            <Route path="Baby" element={ <Baby /> } />
            <Route path="MenCloth" element={ <MenCloth /> } />
            <Route path="FemaleCloth" element={ <FemaleCloth /> } />
            <Route path="Jewelery" element={ <Jewelery /> } />
            <Route path="Furniture" element={ <Furniture /> } />
            <Route path="Book" element={ <Book /> } />
            <Route path="Toys" element={ <Toys /> } />
            <Route path="Groceries" element={ <Groceries /> } />
            <Route path="Sport" element={ <Sport /> } />
            <Route path="Beauty" element={ <Beauty /> } />
            <Route path="Apparel" element={ <Apparel /> } />




         </Routes>



      </Container>

   )
}