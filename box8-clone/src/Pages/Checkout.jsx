import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const Checkout = () => {
    const navigate=useNavigate()
    const cartData=useSelector((store)=>store.cartData.cart);
    let total=0
    cartData.map((item) => {
        total += (item.meal_price)
      })
  

      //console.log(total,"total")
      let number =Math.floor(Math.random() * 100000000000);

   const pay=()=>{
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
        <div style={{width:"100%",backgroundColor:"rgb(247,247,247)",paddingTop:"2%"}}>

        <div style={{display:"flex",width:"90%",margin:"auto",marginTop:"2%",}}>
           <div style={{width:"60%",marginTop:"3%",height:"60%",padding:"2%",border:"1px solid gray"}}>
             <div style={{width:"100%",borderBottom:"1px solid gray",paddingTop:"15px",paddingBottom:"1%"}}>Payment Method(s)</div>
          <div style={{borderBottom:"1px solid gray",paddingTop:"15px",display:"flex"}}>
           <input className="Coupon" type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">
          <img style={{width:"50px",height:"30px"}}src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/visa.png" alt="" />  
          <img  style={{width:"50px",height:"30px"}}src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/a.png" alt="" />
          <img  style={{width:"50px",height:"30px"}} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/dic.png" alt="" />
          <img   style={{width:"50px",height:"30px"}} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/ww.png" alt="" />
          </label>
             </div>
             <div style={{paddingTop:"15px"}}>
             <input className="Coupon" type="radio" id="html" name="fav_language" value="HTML"/>
          <label for="html">
          <img   style={{width:"50px",height:"30px"}} src="https://uidesign.gbtcdn.com/GB/image/banner/20180407_2974/paypal.png" alt="" />
          </label>
          <p>The safer,easier way to pay.</p>
             </div>
           

           </div>
           <div style={{width:"30%",marginLeft:"2%",marginTop:"3%",padding:"2%",border:"1px solid gray",marginBottom:"10%"}}>

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

          <button onClick={pay}className='placeOrder'>PAY NOW</button>

           </div>
       </div>

</div>

       
   </>
  )
}
