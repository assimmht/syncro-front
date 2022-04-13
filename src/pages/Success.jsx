import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import { userRequest } from "../requestMethods";
import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Button } from "@mui/material";

const Success = () => {
  const location = useLocation();
  //in Cart.jsx I sent data and cart. Please check that page for the changes.(in video it's only data)
  const data = location.state.stripeData;
  const cart = location.state.cart;
  const currentUser = useSelector((state) => state.user.currentUser);
  const [orderId, setOrderId] = useState(null);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });

  useEffect(() => {
    const createOrder = async () => {
      try {
        const res = await userRequest.post("/orders", {
          userId: currentUser._id,
          products: cart.products.map((item) => ({
            productId: item._id,
            quantity: item._quantity,
          })),
          amount: cart.total,
          address: data.billing_details.address,
        });
        setOrderId(res.data._id);
      } catch {}
    };
    data && createOrder();
  }, [cart, data, currentUser]);

  return (
    <div>
      <Navbar />
      <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "whitesmoke"
      }}
    >
      <p style={{fontSize: "22px", padding: "10px", marginTop: "-250px"}}>
      {orderId
        ? `La commande a été créée avec succès. Votre numéro de commande est ${orderId}`
        : `Paiement réussi`}
      </p>
      <p style={{fontSize: "22px"}}>
      {orderId
        ? `La commande a été créée avec succès. Votre numéro de commande est ${orderId}`
        : `Votre commande est en préparation...`}
      </p>
      <Link to="/" style={{textDecoration: 0}}>
        <Button style={{ marginTop: 20 }} variant="contained">Aller à la page d'accueil</Button>
      </Link>
    </div>
    <Footer />
    </div>

  );
};

export default Success;