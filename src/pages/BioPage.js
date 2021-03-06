import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { backEndUrl, testUrl } from '../utils/urls.js'
import "../styles/BioPage.css";
import UpdateList from '../components/UpdateList.js'

export default function BioPage() {
    // stores the info about the user that's relevant to the bio page
    const [bioInfo, setBioInfo] = useState({});
    // We make a pull request on page load in order to get the data necessary
    useEffect(() => {
        async function fetchData() {
            let response;
            try {
                // TODO: fix this id situation. Maybe swap it out so you can search a user by username or something
                response = await axios.get(`${testUrl}/users/625ef3201a1466a43b3b04d4`);
                console.log(response.data);
                setBioInfo(response.data);
                for (let i = response.data.updates.length - 1; i >= 0; i--) {
                    console.log(response.data.updates[i]);
                }
            } catch (err) {
                console.log("=====\n" + err + "\n=====");
                throw err;
            }
        }
        
        fetchData();
    }, []);

    return (
        <section className="bio-page container-fluid py-2">
            <div className="row justify-content-center row-1">
                <h1 className="col-12 text-center">About Me</h1>
                <div className="portrait-holder col-4 col-md-3 col-xl-2 justify-content-center py-2">
                    <img src={bioInfo.portrait} className="card-img-top portrait-image"></img>
                </div>
                <div className="bio-holder col-10 col-lg-7 col-xl-8">
                    <p>{bioInfo.bio}</p>
                </div>
            </div>
            {bioInfo.updates && <UpdateList updates={bioInfo.updates}/>}
        </section>
    )
}