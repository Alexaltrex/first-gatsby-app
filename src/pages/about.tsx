import React from "react";
import {HeadFC} from "gatsby";
import MainLayout from "../components/layouts/MainLayout";


const AboutPage = () => {
    return (
        <MainLayout title="About Page">
            <p>About page content</p>
        </MainLayout>

    )
}

export default AboutPage

export const Head: HeadFC = () => (
    <>
        <title>Gatsby App | About</title>
        <meta name="description" content="Your description" />
    </>

)
