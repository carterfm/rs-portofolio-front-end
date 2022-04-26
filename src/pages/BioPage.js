import React, { useState, useEffect, useRef } from "react";
import axios from 'axios';
import { backEndUrl, testUrl } from '../utils/urls.js'

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
                setBioInfo(response.data)
            } catch (err) {
                console.log("=====\n" + err + "\n=====");
                throw err;
            }
        }
        
        fetchData();
    }, []);

    return (
        <section>
            <h2>Bio page placeholder--fetch requests are working properly, now that I have cors set up OK</h2>
        </section>
    )
}