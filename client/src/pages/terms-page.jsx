import React, {useEffect} from 'react';
import FeatureStore from "../store/FeatureStore.js";
import Layout from "../components/layout/Layout.jsx";
import LegalContents from "../components/features/legal-contents.jsx";

const TermsPage = () => {
    const {LegalDetailsRequest}=FeatureStore();
    useEffect(() => {
        (async ()=>{
            await LegalDetailsRequest("terms")
        })()
    }, []);
    return (
        <Layout>
            <LegalContents/>
        </Layout>
    );
};

export default TermsPage;