# Remote Sensing Indices using Google Earth Engine for Emergency Eanagement

## The goal of the project
This project aims to show how Google Earth Engine can help the emergency responders and the decision-makers. By detecting the affected area by natural disaster using remote sensing indices. Then let the user download the results and use them in further analysis with a local database, use the below link to see the app: 

                                             https://masawdah.users.earthengine.app/view/emergency-management

Three different indices were used, namely Normal Burn Area Index (BAI),  Normalized Difference Water Index (NDWI), and  Normalized Difference Vegetation Index (NDVI). These indices were used for the following disasters forest fire, flood, and deforestation, respectively.

The user can test the case studies mentioned in the following sections, with gudince [Click Here](userManual.md). 

## Why Google Engine ?
This app was developed using Google earth engine JavaScript API. One of the most important reasons to use the google earth engine (GEE) is the massive amount of available imagery. And GEE makes the process of analysis very easy and automated even if the workstation is old and slow.For more information about the google earth engine, click [here](googleEngine.md).

## Describe the code 
The code used Google Earth Engine (GEE) through JavaScript API.  It is an open-source library, and the user can access the app's code, modify it, and add more functionality. [Here](codeUse.md) you will find the guidance to download the code.  

## Forest Fire: Burn Area Index (BAI)
It was used to detect the burnt area for wildfires in Emperador, Chile, in February 2017. In this case, Burn Area Index (BAI) was used to highlight the burnt area, especially in the vast areas, using the following formula:

                                                  BAI=1/((0.1+(Red))^2*(0.06-NIR)^2)

Which Red is a red band and NIR is near infrared band. The value range of the BAI is 0 to 100.
The difference between post-BAI and pre-BAI was used to estimate the burn severity. The high value of the difference will represent severe damage, low and negative values representing the less damaged area.

## Normalized Difference Water Index (NDWI)
This index's primary use is monitoring different water bodies. Therefore, it helps to detect the flooded area. NDWI was used to detect the affected area by Russian river flooding in California in February 2019. 

Normalized Difference Water Index (NDWI) calculated using the following formula: 

                                                    NDWI = (NIR – SWIR) / (NIR + SWIR)

 Which NIR is a red band and SWIR is a shortwave infrared. The value range of the NDWI is -1 to 1.


## Normalized Difference Vegetation Index (NDVI)
The rainforest is considered the much-effected area by deforestation and losing trees, so it is very important to build a system to monitor the vegetation and detect the much-effected areas by deforestation. Google engine can monitor the vegetation using a time series of images and highlight the affected area. This app shows the capability of GEE for monitoring vegetation. By analyzing the difference of NDVI between two images acquired at different dates.  

         
                                                    NDVI = (NIR – Red) / (NIR + Red)

Which NIR is a near infrared band and Red is a red band. NDVI values range from -1 to 1.


## User Manual
A user manual was designed to assist the users. This guide describes the apps' functionality, describing the tools available on it, and how the user can download the results on his machine. [Click Here](userManual.md) to see the manual.  





