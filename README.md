# Change detection analysis for emergency management using google earth engine
 Mohammad Alasawedah (masawdah@gmail.com)

 Filip Loncar  (m20190032@novaims.unl.pt)

## The goal of the project
This project focus on provide an online tool to help the emergency responders and the decsion makers by detect the effected area by different types of natural disasters. The time is very important in the responce process, so existing an automatic tool will be very helpful to save time consuming by detect the damage area with the possibility to download the results and use them in different analysis with local database.  

## Why Google Engine ?
This app designed using Google earth engine JavaScript API. One of the most important reasons to use google earth engine (GEE) is a huge amont of imagery data that are available these days and how GEE makes the process of discover them and analyiz them very easy and automated even if the user machine is old and slow, foe more information about google earth engine click [here](googleEngine.md).

## Describe the code 
This code design using GEE JavaScript API. It is an open source library, and the app's code can be access by the user and modify it and build more functionality on it depending on what the user need. [Here](codeUse.md) you will find a steps to download the code, what the user needs to start use it and modify it, also where and how can be run online to check it. 

## Type of emergency situation in the tools
This tool will provide change detection for three different emergency situation using different algorithms. 
The following disaster situation used different algorithms:

* Forest Fire: used Burn Area Index (BAI) algorithm.
* Flood: used Normalized Difference Water Index (NDWI) algorithm.
* Deforestation: used Normalized Difference Vegetation Index (NDVI) algorithm.

For more information about the algorithms click [here](algorithms.md).

## User Manual
A user manual designed to provide assestant for the users who will used the application. This guide describe the functionality of the apps, describing the tools availaibe on it, describe the results of the analysis and how the user can download the results on his own machine. [Click Here](userManual.md) to start the adventure.  





