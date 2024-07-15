import React from 'react'
import './effort.css'
import 'bootstrap/dist/css/bootstrap.css'
import { Card,Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Effort() {
  return (
    <div className='effort container-flex'>

      <div className='effort-box '>

        <Link className='ec1' to='https://github.com/RohanCheera' >
          <Card className='effort-card ec1' />
        </Link>

      </div>
      <div className='effort-box '>

        <Link to='https://leetcode.com/DRY099/'>
          <Card className='effort-card ec2' />
        </Link>

      </div>
      <div className='effort-box '>

        <Link to='https://huggingface.co/RohanCheera'>
          <Card className='effort-card ec3' />
        </Link>

      </div>
      <div className='effort-box '>

        <Link to='https://www.kaggle.com/rohancheera' >
          <Card className='effort-card ec4' />
        </Link>

      </div>
      <div className='carousel'>
      <Carousel data-bs-theme="dark">
      <Carousel.Item interval={1000}>
      <Link className='ec1' to='https://github.com/RohanCheera' >
          <Card className='effort-card ec1' />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Link to='https://leetcode.com/Cheera_Rohan/'>
          <Card className='effort-card ec2' />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Link to='https://huggingface.co/RohanCheera'>
          <Card className='effort-card ec3' />
        </Link>
        
      </Carousel.Item>
      <Carousel.Item interval={1000}>
      <Link to='https://www.kaggle.com/rohancheera' >
          <Card className='effort-card ec4' />
        </Link>

        
      </Carousel.Item>
    </Carousel>
      </div>
    </div>
  )
}

export default Effort
