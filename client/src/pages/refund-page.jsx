import React, {useEffect} from 'react';
import FeatureStore from "../store/FeatureStore.js";
import Layout from "../components/layout/Layout.jsx";
import LegalContents from "../components/features/legal-contents.jsx";

const RefundPage = () => {
    const {LegalDetailsRequest}=FeatureStore();
    useEffect(() => {
        (async ()=>{
            await LegalDetailsRequest("refund")
        })()
    }, []);
    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default RefundPage;