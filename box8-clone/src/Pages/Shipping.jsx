import { Country,State } from 'country-state-city';
import React from 'react'
import { Fragment,useState} from 'react'
import "./Shipping.css"
import { Link, useNavigate } from 'react-router-dom';
//import { useAlert } from "react-alert";
import { useSelector,useDispatch} from 'react-redux'
import { saveShippingInfo } from '../Redux/shipping/action';
import {Box,Image,} from "@chakra-ui/react"


import axios from 'axios';
export const Shipping = () => {

  

    const dispatch =useDispatch();
     const navigate = useNavigate();
 
 
   const shippingInfo =useSelector((store)=>store.shippingInfo);
  // console.log("storeFinal",shippingInfo)
 
   const [firstName,setFirstName] =useState(shippingInfo.firstName);
   const [lastName,setLastName] =useState(shippingInfo.lastName);
  
   

    const [address,setAddress] =useState(shippingInfo.address);
    const [city,setCity] =useState(shippingInfo.city);
    const [state,setState] =useState(shippingInfo.state);
    const [country,setCountry] =useState(shippingInfo.country);
    const [pinCode,setPinCode]=useState(shippingInfo.pinCode);

    const [phoneNo,setPhoneNo]=useState(shippingInfo.phoneNo);
     const [email,setEmail] =useState(shippingInfo.email)
 
     
  
    const shippingSubmit=(e)=>{
      
     e.preventDefault();
   
   
    
const payload={
   First_Name:firstName,
   Last_Name:lastName,
   Address:address,
   City:city,
   State:state,
   Country:country,
   PinCode:pinCode,
   PhoneNo:phoneNo,
   Email:email,
   
   
}

    //  axios.post('http://localhost:7005/addAddress', payload)
    // .then(function (response) {
    //   console.log(response);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

  
    //   console.log({address,city,state,country,pinCode,phoneNo})

       dispatch(saveShippingInfo({firstName,lastName,email,address,city,state,country,pinCode,phoneNo})
     );

    
     
    navigate("/checkout", { replace: false });
    }
   
    
    return <Fragment >

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


    
     

                <h1 className='shippingHeading'>Add New Address</h1>
            <div className='shippingContainer'>
             <div className='shippingBox'>
              
              <form className='shippingForm'
              encType='multipart/form-data'
              onSubmit={shippingSubmit}
              >

                 <div>
                <h3 >*First Name :</h3> 
                 <input type="text"
                 placeholder='First Name'
                 required
                 value={firstName}
                 onChange={(e)=>setFirstName(e.target.value)}

                 />
              </div>

              <div>
                <h3 >*Last Name :</h3> 
                 <input type="text"
                 placeholder='Last Name'
                 required
                 value={lastName}
                 onChange={(e)=>setLastName(e.target.value)}

                 />
              </div>

              <div>
                <h3 >*Address :</h3> 
                 <input type="text"
                 placeholder='Address'
                 required
                 value={address}
                 onChange={(e)=>setAddress(e.target.value)}

                 />
              </div>
              <div>
              <h3>*City :</h3> 
                 <input type="text"
                 placeholder='City'
                 required
                 value={city}
                 onChange={(e)=>setCity(e.target.value)}
                 
                 />
              </div>
              <div>
                <h3>*Pin :</h3> 
                 <input type="number"
                 placeholder='Pin Code'
                 required
                 value={pinCode}
                 onChange={(e)=>setPinCode(e.target.value)}
                 
                 />
              </div>
              <div>
                <h3>*Phone No :</h3> 
                 <input type="number"
                 placeholder='Phone Number'
                 required
                 value={phoneNo}
                 onChange={(e)=>setPhoneNo(e.target.value)}
                 size="10"
                 />
              </div>
              <div>
                <h3 >*Email :</h3> 
                 <input type="text"
                 placeholder="email"
                 required
                 value={email}
                 onChange={(e)=>setEmail(e.target.value)}

                 />
              </div>


              <div>
                 <h3> *Country :</h3>
                
                <select required
                value={country}
                onChange={(e)=>setCountry(e.target.value)}
                
                >
                   <option value ="">Country</option>
                    {Country &&
                    Country.getAllCountries().map((item)=>(
                      <option key={item.isoCode} value={item.isoCode}>
                         {item.name}
                      </option> 
                    ))
                    }
                </select>
              </div>

              {country && (
                 <div>
                   <h3>*State :</h3> 
                    <select requiredvalue={state}
                    onChange={(e)=>setState(e.target.value)}>
              <option value="">State</option>
              {State &&
              State.getStatesOfCountry(country).map((item)=>(
                <option key={item.isoCode} value ={item.isoCode}>{item.name}</option> 
              ))
              }
                    </select>
                 </div>
              )}
            
              <input type="submit"
              value ="Confirm"
              className='shippingBtn'
              disabled={state ? false:true}></input>
            
              </form>


             </div>
          </div>

         </Fragment>

        
  
}
