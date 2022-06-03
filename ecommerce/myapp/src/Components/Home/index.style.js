import styled from "styled-components";
import doge from '../Images/doge1.png'




export const Container = styled.div `


   width: 100%;
   height: 100vh;


   // Navigation
   .sidenav {
      height: 100%;
      width: 0;
      position: fixed;
      z-index: 1;
      top: 0;
      left: 0;
      overflow-x: hidden;
      background-color: rgba(0,0,0, 0.7);
      transition: 0.5s;
      list-style: none;

      h4 {
         font-size: 1.3rem;
      }
      

      .nav-icon {
         -webkit-transform: scale(1);
         font-size: 2rem;
         margin-left: 1rem;


      }  



      li {
         font-size: 1.5rem;
         transition: 0.3s ease-in;
         padding: 0.9rem 1rem 0.9rem 1rem;
         color: white;
         position: relative;
         &:hover {
            transition: 0.3s ease-in;
            color: orange;
            cursor: pointer;
         }

         &::before {
            content: '';
            position: absolute;
            width: 0%;
            height:2px;
            background: orange;
            bottom: 0px;
            border-radius: 5px;
            transition: 0.3s ease-in;
        }
        &:hover:before {
            width: 70%;
        }

      }


      }
      .sign-logo {
         padding: 0.7rem 0 0.7rem 0;
         width: 100%;
         display: flex;
         color: white;
         border-bottom: 2px solid white;
         border-top: 2px solid white;
         border-radius: 10px;

         h4 {
            display: grid;
            place-items: center;
         }

         .logo {
            width: 60px;
            height: 60px;
            margin-right: 10px;
            margin-left: 20px;
            margin-top: 5px;
            border-radius: 50%;
            border: 2px solid white;   
            background: url(${props=>props.logo});
            background-repeat: no-repeat;
            background-size: cover;
         }

      }


    }

      .closebtn {
      font-size: 50px;
      margin-left: 50px;
      border: none;
      padding: 0;
      color: white;
      background: none;
   }

   header {
      background: white;

      display: flex;
      justify-content: space-between;
      // Store desc

      h2 {
         cursor: pointer;
         color: #1c1b2b;
         -webkit-transform: rotate(-9deg);
      }
      h3 {
         cursor: pointer;
         color: #28273c;
         height: 100%;
         font-size: 1.9rem;
         display: flex;
         align-items: center;
      }
      .shop , .logo {
      }
      .shop {
         margin-right: 0.3em;
         display: flex;
         align-items: center;
 
         .Cart {
            position: relative;

            span {
               position: absolute;
               font-size: 2rem;
               color: black;
               top: 10%;
               left: 40%;
            }
         }

         .person,.cart {
            padding-right: 0.4em;
            width: 4rem;
            height: 50%;
            color: #1c1b2b;
            cursor: pointer;
            transition: color 0.3s ease-in;
            &:hover {
               color: #28273c;
            }

         }
      }
      .logo {
         display: flex;
      }

      .doge-logo {
         width: 70px;
         height: 50px;
         background: url(${doge});
         background-repeat: no-repeat;
         background-size: 80%;
         position: absolute;
         left: 55px;
         cursor: pointer;

      }


      @media(min-width: 550px){

         .logo {
            font-size: 1.2rem;
            margin-left: 1.5rem;
         }
         h2 {
             -webkit-transform: rotate(0deg);
  
            }
         h3 {
            margin-right: 2rem;
            font-size: 2rem;
         }

      }


   }






`
export const Nav = styled.div`
   width: 100%;
   padding: 0.7rem 0 0.7rem 0;
   display: flex;
   align-items: center;
   background: #111111;
   position: relative;


   .items {
      display: flex;
      position: absolute;
      left: 30%;
      list-style: none;
      gap: 2rem;
      li {

      }

   }

   @media(max-width: 700px) {
      .items {
         display: none;
      }
   }
   @media(min-width: 800px) {
      .items {
         display: flex;
         left: 60%;
         gap: 1rem;
         color: black;
         font-weight: bold;
         font-size: 1.2rem;
         cursor: pointer;
      }
   }
   @media(min-width: 1000px) {
      .items {
         left: 45%;
         gap: 2.5rem;
         color: black;
         font-weight: bold;
         font-size: 1.5rem;
         cursor: pointer;
      }
   }


   .ham-menu {
      margin-left: 10px;
      gap: 4px;
      display: flex;
      flex-direction: column;
      width: 40px;
      justify-content: center;
      align-items: center;
      padding: 0.3rem;
   }
   .stick {
      width: 25px;
      height: 2px;
      cursor: pointer;
      background: white;

   }


   .search-box{
      width: fit-content;
      height: fit-content;
      position: relative;
    }
    .input-search{
      height: 10px;
      width: 20px;
      border-style: none;
      padding: 10px;
      font-size: 13px;
      letter-spacing: 1px;
      outline: none;
      border-radius: 25px;
      transition: all .5s ease-in-out;
      background-color: grey;
      padding-right: 40px;
      color: black;
    }
    .input-search::placeholder{
      color:black;
      font-size: 18px;
      letter-spacing: 2px;
      font-weight: 100;
    }
    .btn-search{
      width: 30px;
      height: 30px;
      border-style: none;
      font-size: 20px;
      font-weight: bold;
      outline: none;
      cursor: pointer;
      border-radius: 50%;
      position: absolute;
      right: 0px;
      color:#ffffff ;
      background-color:white;
      pointer-events: painted;  
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center;
      color: black;
      display: grid;
      font-size: 1.4rem;
      place-items: center;
   }
    .btn-search:focus ~ .input-search{
      border-radius: 0px;
      background-color: whitesmoke;
      border-bottom:1px solid black;
      transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }

    .input-search:focus{
      width: 200px;
      border-radius: 0px;
      background-color: whitesmoke;
      border-bottom:1px solid black;
      transition: all 500ms cubic-bezier(0, 0.110, 0.35, 2);
    }
    
    @media(min-width: 550px) {
       .input-search {
          width: 200px;
          font-size: 2rem;
       }
    }

    @media(min-width: 700px) {
      .input-search {
         width: 400px;
         font-size: 1.2rem;
         &:focus {
            width: 500px;
         }

      }
   }
`

