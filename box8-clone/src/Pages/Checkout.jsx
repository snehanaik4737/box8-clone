import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import "./Checkout.css"
import { Flex } from '@chakra-ui/react'
export const Checkout = () => {
    const navigate=useNavigate()
    const cartData=useSelector((store)=>store.cartData.cart);
    const shippingInfo = useSelector((store) => store.shippingInfo.shippingInfo);

    let total=0
     let amount= cartData.map((item) => {
      return   total += (item.meal_price)
      })
 

      //console.log(total,"total")
      let number =Math.floor(Math.random() * 100000000000);

   const pay=()=>{
    alert("Hurrey! Your favourite dish is on the way!,Thank you for placing an order")

    navigate("/",{replace:true})
   }
    

  return (
   <>
    <Box style={{ width: "100%", display: "flex"}}>
         
        <Box style={{ width: "70%", display: "flex", margin: "2%" }}>
          
          <Image
            style={{ width: "15%", height: "100%", marginLeft: "4%" }}
            src="https://d2pc4443o2qatl.cloudfront.net/20220625101743/assets/images/logo.png"
            ></Image>
         
          <input
            style={{
              border: "0.2px solid gray",
              padding: "5px",
              fontSize: "17px",
              marginLeft: "8%",
            }}
            type="text"
            placeholder="Enter delivery location"
          ></input>
        </Box>
       
        </Box>


        <div className="container">
          <h3 style={{ display: "flex" }}>
            {shippingInfo.firstName} {shippingInfo.lastName}{" "}
            <div className="default">Default</div>
          </h3>
          <p>
            {shippingInfo.phoneNo} / {shippingInfo.email}
          </p>

          <p>{shippingInfo.address}</p>

          <p>
            Country:{shippingInfo.country}, *Pin: {shippingInfo.pinCode}, *State :{shippingInfo.state}
          </p>
        </div>
      

        <div style={{width:"100%",backgroundColor:"rgb(247,247,247)",paddingTop:"2%"}}>

        <div style={{display:"flex",width:"90%",margin:"auto",marginTop:"2%",}}>
           <div style={{width:"60%",marginTop:"3%",height:"60%",padding:"2%",border:"1px solid gray"}}>
             <div className='paymentMethod' >Payment Method(s)</div>
          <div className='paymentImages' >
           <input className="Coupon" type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html" >
            <Flex>
          <img  src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png" alt="" />  
          <img  src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png" alt="" />
          <img   src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png" alt="" />
          <img   src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png" alt="" />
          </Flex>
          </label>
             </div>
             <div style={{paddingTop:"15px"}}>
              <Flex>
             <input className="Coupon" type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">
          <img   style={{width:"50px",height:"30px"}} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png" alt="" />
          </label>
          <p className="easier">The safer,easier way to pay.</p>
          </Flex>
             </div>
           

           </div>
           <div className='payBill' >

          <div style={{borderBottom:"1px solid gray"}}>
              Your Bill
          </div>
          <div>
       <h4>Order Number</h4>
       {number}
       {/* <p>Shipping address</p>
        <h4> {shippingInfo.address} / {shippingInfo.country}/{shippingInfo.state}/{shippingInfo.pinCode}</h4>  */}
          </div>

          <div >
           <div style={{display:"flex",justifyContent:"space-between"}}>

           <h3> Grand Total 
             </h3>
           <h3> ₹{total}</h3>
           </div>
           <div style={{display:"flex",justifyContent:"space-between"}}>
           <h3>Payable Amount
             </h3>
           <h3> ₹{total}</h3>

           </div>

          </div>
          <div id='payNow'>

          <button onClick={pay}className='placeOrder'>PAY NOW</button>
          </div>


           </div>
       </div>

</div>

       
   </>
  )
}
