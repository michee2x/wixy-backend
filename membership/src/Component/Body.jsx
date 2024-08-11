import React, { useEffect, useState } from 'react'
import Card from './Card'
import {Navigate} from "react-router-dom"
import Aos from "aos"
import "aos/dist/aos.css" 

const Body = ({children}) => {
const [navigate, setNavigate] = useState(false)
const loggedUser = JSON.parse(localStorage.getItem("loggedUser"))?.loggedUser

const [data, setData] = useState([
    {plan:"Basic Fan Card", price:300, benefits:[
        "Personalized signed photo of Alex Terrible", "Access to exclusive fan Content", "10% discount on merchandise"
    ]},
    {plan:"Silver Membership", price:450, benefits:[
        "All Basic Fan Card Benefits", "Early access to concert tickets", "Signed CD or Vinyl", "Personalized thank-you video from Alex"
    ]},
    {plan:"Gold Membership", price:600, benefits:[
        "All silver Membership benefits", "Meet-and-greet at a concert (one event)", "Signed guitar pick or drumstick", "Exclusive Gold Membership t-shirt"
    ]},
    {plan:"Platinum Membership", price:1000, benefits:[
        "All Gold Membership benefits", "Private Online Q&A session with Alex", "Signed poster or artbook", "Priority access to VIP experience"
    ]},
    {plan:"Ultimate Fan Package", price:1500, benefits:[
        "All Platinum Membership benefits", "Personalized video message from Alex", "Signed Sirenia memorabilia (e.g drumhead, guitar)", "Backstage tour and meet-and-greet at a concert (one event)"
    ]}
])

const [max, setMax] = useState([
{name:"gold max", price:200, img:"https://i.imgur.com/gJ6rCv8.png", rating:"4.5"},
{name:"silver max", price:700, img:"https://i.imgur.com/oSAluGw.png", rating:"5.0"},
{name:"white max", price:150, img:"https://i.imgur.com/dG7qVJa.png", rating:"3.0"},
])

useEffect(() => {
        Aos.init({duration:2000})
    }, [])

if(!loggedUser){
  return <Navigate to={"/auth"}/>
}
  return (
    
<div className='w-screen h-full'>
<div style={{backgroundImage:"url(https://i.imgur.com/atBPDbj.jpeg)", backgroundPosition:'center', backgroundSize:'cover'}} className="text-center mt-12 mb-8 relative w-full mx-auto h-[20rem] rounded-lg md:p-8 dark:bg-gray-800" id="about" role="tabpanel" aria-labelledby="about-tab">
<div className='w-full relative h-full '>
      <h2 data-aos="fade-down" className="mb-3 translate-x-[50%] bottom-0 absolute text-lg mx-auto text-white max-w-md md:text-2xl font-extrabold tracking-normal pt-5 text-gray-700">Alex Terrible's VIP fan membership Card Signup</h2>
            
</div>
            
</div>
<p data-aos="fade-up" className="mb-5 font-bold w-full px-7 text-center mt-3 text-gray-700 text-xs dark:text-blue-200">
              Here are the different categories of Alex Terrible's VIP fan membership cards, along with their prices and benefits:
            </p>
<div className='grid h-full w-full pt-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center '>
      {data.map((e) => {
        return (
            <Card content={e}/>
        )
      })}
    </div>


<p class="text-center  py-16 text-3xl font-semibold leading-relaxed text-gray-900 dark:text-white">purchase max</p>



{ max.map((i) => {
return (

<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img data-aos="zoom-in" className="p-8 rounded-t-lg" src={i.img} alt="max image" />
    </a>
    <div className="px-5 pb-5">
        <a href="#">
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{i.name}</h5>
        </a>
        <div className="flex items-center mt-2.5 mb-5">
            <div className="flex items-center space-x-1 rtl:space-x-reverse">
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
                <svg className="w-4 h-4 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
            </div>
            <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{i.rating}</span>
        </div>
        <div className="flex items-center justify-between">
            <span data-aos="flip-left" className="text-3xl font-bold text-gray-900 dark:text-white">${i.price}</span>
            <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">purchase max</a>
        </div>
    </div>
</div>

)})}


    <div data-aos="fade-up" className='w-full mt-5 p-3 text-center dark:text-white/80 text-gray-900 h-auto'>
        please note that prices and benefits may vary depending on the country, region or promotion.
    </div>
</div>

  )
}

export default Body
