'use client';
import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Crypto1 from "@/components/sections/Crypto1"

import {useEffect} from 'react';

import { permanentRedirect } from 'next/navigation';

export default function Home() {

    
    useEffect(() => {
        // Check if the window object exists (client-side)
        if (typeof window !== 'undefined') {
          // Access localStorage
            const token = window.localStorage.getItem('accessToken');
            if (!token) {
                permanentRedirect('/login');
            }

        }
    }, []);
    

    return (
        <>
            <Layout headerStyle={1} footerStyle={2}>
                <Banner1 />
                <Crypto1 />
                <About1></About1>
            </Layout>
        </>
    )
}