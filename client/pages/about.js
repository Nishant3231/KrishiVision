import React from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import styles from '../styles/Home.module.css'
import Button from 'react-bootstrap/Button';

export default function About() {
    return (
        <div>
            <Navbar/>
            <div >
            <h1>Welcome!</h1>
            <p>This is a Machine Learning, Deep Learning and Web based project which will help farmers before harvesting the crop and connect with the agricultural specialists..</p>
            <p>Problem Statement :
In India, The Agriculture industry is extremely vital and crucial for economic and social development and jobs. In India, the agricultural sector provides a living for almost 48% of the population. As per the 2019-2020 economic survey, an Indian farmer's median wage in 16 states is Rupees 2500. Most of the Indian population depends on agriculture for their livelihood. Agriculture gives an opportunity of employment to the village people to develop a country like India on large scale and give a push in the economic sector. The majority of farmers face the problem of planting an inappropriate crop for their land based on a conventional or non-scientific approach. This is a challenging task for a country like India, where agriculture feeds approximately 42% of the population. And the outcomes for the farmer of choosing the wrong crop for land, not able to detect the diseases in the crops and preventing it, is moving towards metro city for livelihoods, suicide, quitting the agriculture and give land on lease to industrialist or use for the non-agriculture purpose. The outcome of wrong crop selection is less yield and less profit.    
<br></br>
Motivation:
Farming is one of the major sectors that influences a country’s economic growth.
In country like India, majority of the population is dependent on agriculture for their livelihood. Many new technologies, such as Machine Learning and Deep Learning, are being implemented into agriculture so that it is easier for farmers to grow and maximize their yield.
In this project, I present a website in which the following applications are implemented; Crop recommendation, Fertilizer recommendation and Plant disease prediction, respectively.
In the crop recommendation application, the user can provide the soil data from their side and the application will predict which crop should the user grow.

For the fertilizer recommendation application, the user can input the soil data and the type of crop they are growing, and the application will predict what the soil lacks or has excess of and will recommend improvements.

For the last application, that is the plant disease prediction application, the user can input an image of a diseased plant leaf, and the application will predict what disease it is and will also give a little background about the disease and suggestions to cure it.   
<br></br>
Proposed Solution :
The solution to the problem is Machine learning, which is one of the applications of Artificial Intelligence, is being used to implement the proposed system. Crop recommendation is going to recommend you the best crop you can grow in your land as per the soil nutrition value and along with as per the climate in that region. And recommending the best fertilizer for every particular crop is also a challenging task. And the other and most important issue is when a plant gets caught by heterogeneous diseases that effect on less amount of agriculture production and compromises with quality as well. To overcome all these issues this recommendation has been proposed . Nowadays a lot of research and work is being implemented in the smart and modern agriculture domain. Crop recommendation is characterized by a soil database comprised of Nitrogen, Phosphorus, potassium. The ensembles technique is used to build a recommendation model that combines the prediction of multiple machine learning. Models to recommend the right crop based on soil value and the best fertilizer to use.
<br></br>   
<br></br>         
The Beneficial Users :
Farmer
Common People
Seller
Buyer
Employees
Industrial People
<br></br>
<br></br>
❤Value for society :
Consumers Farming is one of the major sectors that influences a country’s economic growth. In country like India, majority of the population is dependent on agriculture for their livelihood. Many new technologies, such as Machine Learning and Deep Learning, are being implemented into agriculture so that it is easier for farmers to grow and maximize their yield
<br></br>
💚Value for Environment :
In the crop recommendation application, the user can provide the soil data from their side and the application will predict which crop should the user grow.
For the fertilizer recommendation application, the user can input the soil data and the type of crop they are growing, and the application will predict what the soil lacks or has excess of and will recommend improvements.
For the last application, that is the plant disease prediction application, the user can input an image of a diseased plant leaf, and the application will predict what disease it is and will also give a little background about the disease and suggestions to cure it.
These all are to improve the Agriculture, that’s slightly reduces the poverty, climatic condition, soil erosion etc ...
<br></br>

🤑Value for Business :
Predicting the fertilizers, Analyzing the disease in a tap makes the life of farmers easy with minimal subscriptions would provide an acceptable return for the organization. This action adds a lot of value to the company and the business in society.
</p>   
                </div>
            <h2>
            <Button variant="primary" Link href='/' className={styles.butt} >Back</Button>
         </h2>
        </div>
    )
}
