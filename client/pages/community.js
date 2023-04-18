import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import styles from '../styles/Home.module.css'
import cx from 'classnames';
import Image from 'next/image';
import { Form } from 'react-bootstrap';

export default function Community() {

    const[baseImage , setBaseImage] = useState("")

    const uploadImage = async (e) => {
    const file = e.target.files[0]
    const base64 = await convertbase64(file);
    console.log(base64);
    setBaseImage(base64);
    };

    const convertbase64 = (file) => {
        return new Promise((resolve,reject)=>{
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result);

            fileReader.onerror = (error) => {
                reject(error);
            }    
            }
        })
    }


    const[post , setpost] = useState({
        title:"",
        description:""

    })

   const OnSubmit = async (e) => {
    event.preventDefault();
    alert('submitted');
    console.log(e.target.title);
    setpost(e.target.value)
   };

    return (
        <div>
            <Navbar/>
            <div>
            <h1>Welcome the comunity section of our app</h1>
            </div>
            <div className='App'>
                <section class="">

                <div class="container-fluid">
                <div class="row">
                <div class="col-lg-6 vh-100">
                <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>title</Form.Label>
        <Form.Control type="text" placeholder="name" value={post.title}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Enter Description here</Form.Label>
        <Form.Control as="textarea" rows={3} value={post.description}/>
      </Form.Group>
      <Form.Group controlId="formFileLg" className="mb-3">
        <Form.Label>Large file input example</Form.Label>
        <Form.Control type="file" size="lg" onChange={(e) => {uploadImage(e)}} />
      </Form.Group>
      <Button type="submit" onClick={(e) => {OnSubmit(e)}}>Submit form</Button>
    </Form> 
                </div>
                <div class="col-lg-6 vh-100">
                    <p>Click on feed to read the deatailed version of the post</p>
                    <ol>
                        <li>{post.title}</li>
                        <li>{post.description}</li>
                        
                    </ol>
                </div>
                </div>
                </div>

               </section> 
            </div>
            <h2>
            <Button variant="primary" Link href='/' className={styles.butt} >Back</Button>
         </h2>
        </div>
    )
}

