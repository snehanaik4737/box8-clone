import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { Box, Flex, Heading, Image, Stack } from "@chakra-ui/react";
import { Slider } from "./Slider";
import "./Meals.css";
import { ProductSimple } from "./ProductSimple";
import { ProductSimpleMeals } from "./ProductSimpleMeals";
import { useSelector } from "react-redux";
import { Navbar } from "./Navbar";
export const Meals = () => {

  // const cart = useSelector((store) => store.cartData.cart);
  // console.log("cart",cart)
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const [dataCategory, setDataCategory] = useState([]);
  const [categoryerror, setcategoryerror] = useState("");

  const { _id } = useParams();
  // console.log("id", _id);

  useEffect(() => {
    fetchData(_id);
  }, [_id]);

  useEffect(() => {
    axios({
      url: "http://localhost:8080/allCategory",
      method: "GET",
    })
      .then((res) => {
        setDataCategory(res.data.allCategory);
        // console.log(res.data)
      })
      .catch((err) => {
        categoryerror(err);
      });
  }, []);

  const fetchData = (_id) => {
    axios({
      url: `http://localhost:8080/meals/${_id}`,
      method: "GET",
    })
      .then((res) => {
        setData(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  const handleget = (id) => {
    console.log(id, "id");
    fetchData(id);
  };

  return (
    <>
      <Navbar/>
      <Box className="greybox">
        Add items worth Rs.202 to get FREE Chocolava Cake
      </Box>
      <Box className="pinkBox">
        <Box w={"50%"} textAlign={"left"} padding={"6%"} display={"flex"}>
          <Box>
            <Heading
              fontFamily={"heading"}
              fontSize={"4xl"}
              paddingBottom={"4%"}
            >
              BOX8
            </Heading>
            <p>India’s Largest Desi Meals Brand. Loved by 45L+ customers.</p>
          </Box>
          <Box>
            <Image
              src={"https://assets.box8.co.in/icon/web/brand/1"}
              w={"70px"}
              h={"70px"}
            ></Image>
          </Box>
        </Box>

        <Box className="pink-div-second">
          <Box className="staticImagediv">
            <Image
              className="image-in-secondDiv"
              src={
                "https://assets.box8.co.in/horizontal-rectangle/web/banner/1072"
              }
            ></Image>
          </Box>
          <Box className="staticImagediv">
            <Image
              className="image-in-secondDiv"
              src={
                "https://assets.box8.co.in/horizontal-rectangle/web/banner/1081"
              }
            ></Image>
          </Box>
        </Box>
      </Box>

      <Box display={"flex"} w={"100%"}>
        <Box w={"30%"} marginLeft={"5%"} >
          <Heading>Menu</Heading>
          <Box
            style={{
              width: "100%",
              overflow: "scroll",
              borderRight: "0.5px solid gray",
              height: "350px",
                       
            }}
          >
            {dataCategory.map((item, index) => (
              <div
                className="mappingCategory"
                key={index}
                onClick={() => handleget(item._id)}
              >
                {item.category_name}
              </div>
            ))}
          </Box>
        </Box>
        <Box className='mealContainer'>
          <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
            <Box>
              <Flex flexWrap="wrap" justifyContent="space-around">
                {data?.map((meal) => (
                  <ProductSimpleMeals key={meal._id} {...meal} />
                ))}
              </Flex>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
