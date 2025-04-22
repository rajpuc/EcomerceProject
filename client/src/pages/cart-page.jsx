import React from 'react';
import CartList from "../components/cart/cart-list.jsx";
import Layout from "../components/layout/Layout.jsx";
import Categories from "../components/product/categories.jsx";

const CartPage = () => {
    return (
        <Layout>
            <CartList/>
            <Categories/>
        </Layout>
    );
};

export default CartPage;