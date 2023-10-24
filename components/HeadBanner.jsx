import React from "react";
import Link from "next/link";
import { urlFor } from "D:/UWC/2023 Modules/Computer Science/Software Engineering/Capstone Assignment/ctrlaltelite/lib/client";

const HeadBanner = ({ headBanner }) => {
  return (
    <div>
      <head>
    <meta charset="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <link rel="icon" href="icons\header-icon.ico" type="image/icon type"/>

    <link rel="stylesheet" type="text/css" href="styles/styles.css"/>


    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous"/>
    
</head>
      <div className="hero-banner-container">
        <img
          src={urlFor(headBanner.image)}
          alt="headphones"
          className="hero-banner-container"
          width="100%"
          height="70%"
        />
        <div class="centered-welcome-text">
          <h1 class="welcome-text">
            Welcome to<span class="col-green"> Thrift it.</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HeadBanner;
