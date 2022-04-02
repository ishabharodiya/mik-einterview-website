import React from 'react'
import './Company.css'
import AOS from 'aos'
import home2 from '../../Component/image/home2.jpg'
import 'aos/dist/aos.css'
const Company = () => {
    AOS.init({
        offset: 300,
        duration: 1000,
    })
  return (
    <div className='home-company' data-aos="fade-up">
      <img className='home-company-photo' src={home2} alt="Mypic"/>
      <div className='home-col-8'>
      <h1 className='home-company-title'>WIN YOUR TIME BACK</h1>
      <h3 className='company-text'>Rather Than Spending Precious Time Interviewing<br />The Wrong Candidates, We'll On-Screen For You So<br />You Can Spend Time On Other Endevors</h3>
    </div>
    </div>
  )
}

export default Company
