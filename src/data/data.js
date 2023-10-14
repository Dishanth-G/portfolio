import CloudBased from '../assets/projects/CloudBased.png'
import voiceBased from '../assets/VoiceBased.png';
import xray from '../assets/Xray.png';

export const data=[
    {
        id:1,
        name:"Cloud Based Voice Assistant ECommerce App",
        thumbImg:voiceBased,  
        image:CloudBased,
        github:"",
        about:"Developed an advanced MERN-stack E-commerce web application featuring state-of-the-art voice recognition system for seamless user interaction.Utilized the latest ReactJS version with industry-standard practices, resulting in improved performance and reduced time complexity for executing complex asks through efficient use of Redux. Integrated innovative features such as user review sentiment calculation and secure storage of order purchase details in the Web3 storage network. Tech Stack: React ,Node , Express, Redux , MongoDB, AlanAI SDK and Stripe API",
    },
    {
        id:2,
        name:"XRAY Prediction App",
        thumbImg:xray,  
        image:xray,
        github:"https://github.com/Dishanth-G/COVID-XRAY-PREDICTION-APP",
        about: 'Main goal of this project is to develop a Machine Learning and Deep Learning Models to classify the X- Rays of Healthy vs Corona vs Pneumonia affected patients. After successfully creating a model with high accuracy, we created a web interface where user (Health Care Worker) will upload images of the chest X-ray and it will provide outcome as a label like infected from the disease or not and also store the details in a database for future reference.'
    }


]