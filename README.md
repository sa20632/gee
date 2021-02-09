# Change detection analysis for emergency management using google earth engine
 Mohammad Alasawedah (masawdah@gmail.com)

 Filip Loncar  (m20190032@novaims.unl.pt)

## The goal of the project
This project focuses on providing an online tool to help the emergency responders and the decision-makers by detecting the affected area by different natural disasters. Time is critical in the response process, so existing an automatic tool will help save time. By detecting the damaged area with the possibility to download the results and use them in further analysis with a local database, use the below link to see the app: 

                                             https://masawdah.users.earthengine.app/view/emergency-management

## Why Google Engine ?
This app was developed using Google earth engine JavaScript API. One of the most important reasons to use the google earth engine (GEE) is the massive amount of available imagery. And GEE makes the process of analysis very easy and automated even if the user machine is old and slow.For more information about the google earth engine, click [here](googleEngine.md).

## Describe the code 
The code used Google Earth Engine (GEE) through JavaScript API.  It is an open-source library, and the app's code can be accessed by the user and modify it and build more functionality depending on what the user needs. [Here](codeUse.md) youwill find steps to download the code, what the user needs to start use and modify it, and how it can run online.  

## Type of emergency situation in the tools
This tool will provide change detection for three different emergencies using different algorithms. 
The following disaster situation used different algorithms:

* Forest Fire: used Burn Area Index (BAI) algorithm.
* Flood: used Normalized Difference Water Index (NDWI) algorithm.
* Deforestation: used Normalized Difference Vegetation Index (NDVI) algorithm.

For more information about the algorithms click [here](algorithms.md).

## User Manual
A user manual was designed to assist the users of the application. This guide describes the apps' functionality, describing the tools available on it, and how the user can download the results on his machine. [Click Here](userManual.md) to see the manual.  





