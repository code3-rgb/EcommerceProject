import {Routes, Route, useNavigate} from 'react-router-dom'


import { Container } from './categories.style'




const category = [


    'Electronics',
    'Jewelery',
    'Baby',
    'Furniture',
    'Sport',
    'MenCloth',
    'FemaleCloth',
    'Beauty',
    'Book',
    'Groceries',
    'Toys'
]



export const Categories = ()=>{

    const navigate = useNavigate()



    return (

        <Container>


            {
                category.map(val=> <p onClick={ ()=> navigate(`/${ val }`) } className='category'>{ val }</p>)
            }


        


        </Container>

    )
}