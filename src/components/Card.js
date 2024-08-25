import React from 'react'

function Card() {
  function openlink(){
    window.location.href = "https://www.flipkart.com/?affid=affsiteplug&affExtParam1=667730d2f44192673f6abd59e6d10414&affExtParam2=60827";
  }
  return (
    <>
      <div>
        <h1 className='header-2'><p>Join Trading Courses & Become Expert of Stock Market</p></h1>
      </div>
      <div className='container1'>
        <div>
          <div className='box1'>
            <h2>01.Expert Quality</h2>
            <p className='text1'>Our experienced faculty ensures that you receive comprehensive training on the stock market, from basic concepts to advanced trading strategies.</p>
          </div>
          <div className='box1'>
            <h2>02.Comprehensive Curriculum</h2>
            <p className='text1'>Our curriculum covers all aspects of stock market trading, including technical analysis, fundamental analysis, and risk management.</p>
          </div>
          <div className='box1'>
            <h2>03. Hands-On Learning</h2>
            <p className='text1'>Our practical approach to learning ensures that you gain real-world experience in trading, enabling you to make informed decisions in the stock market.

            </p>
          </div>
        </div>
        <div className='side-image'>
          <img src='https://images.pexels.com/photos/6771900/pexels-photo-6771900.jpeg?auto=compress&cs=tinysrgb&w=600'></img>
        </div>
      </div>
      <div className='container2'>
        <div className='container3'> 
        <h1>
          <p className='text1'>Become a Pro Trader</p>
        </h1>
        <p className='text1'>At Stockpulse Academy, we equip you with the skills and knowledge to succeed in the stock market. Join us and become a pro trader today.</p>
      <button className='btn1' onClick={openlink}>Enroll Now</button>
      </div>
      </div>
    </>
  )
}

export default Card
