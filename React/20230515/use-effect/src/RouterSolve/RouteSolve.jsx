import React from 'react'
import { BrowserRouter, Routes, Route, Link, useLocation, Outlet, useParams } from "react-router-dom";

// - **Home Page :** /
// - **Product Detail Page** : /products/:id
//     - ex) /products/1 , /products/2, /products/3, /products/4
// - **Product Detail Notice Page :** /products/:id/notice
//     - ex) /products/1/notice , /products/2/notice…
// - **Cart Page :** /cart
// - **User Page :** /users
// - **Coupon Page :** /users/coupon
// - **Question Page :** /users/question
// - **Notice Page :** /users/notice

export default function RouteSolve() {
  
  const productIds = [1, 2, 3, 4, 5];
  return (
    <BrowserRouter>
      <h1>퀴즈</h1>
      <Link to="/">홈페이지</Link>
      {productIds.map((productId) => (
        <Link to={`/products/${productId}`}>상품{productId}</Link>
      ))}
      {/* 라우트를 감싸줍니다. */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:id" element={<Products />}/>
        <Route path="/products/:id/notice" element={<ProductNotice />}/>
        <Route path="/cart" element={<Cart name='licat' />}/>
        <Route path="/users" element={<Users />}/>
        <Route path="/three/*" element={
          <>
            {/* Outlet은 라우트 안에서 작성한 컴포넌트를 빼내주는 애 */}
            <Outlet /> 
            treePage 입니다.
          </>}>
          <Route path="" element={<HojunIndex/>}/>
          <Route path="hojunone/" element={<HojunOne/>}/>
          <Route path="hojuntwo/" element={<HojunTwo/>}/>
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

function HomePage(){
  return <h1>홈페이지</h1>
}

function Cart({name}){
  return <h1>{name} 여기는 /cart입니다.</h1>
}

function Users(){
  return <h1>여기는 Users</h1>
}

function Three(){
  return <h1>hello world3</h1>
}

function Products(){
  const { id } = useParams();
  return <h1>hello Products {id}</h1>
}

function ProductNotice(){
  const { id } = useParams();
  return <h1>hello Products {id} Notice </h1>
}

function HojunIndex(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun index</h1>
}

function HojunOne(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 1</h1>
}

function HojunTwo(){
	const location = useLocation();
  console.log(location)
  return <h1>hello Hojun 2</h1>
}