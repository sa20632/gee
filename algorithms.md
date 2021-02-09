# Remote Sensing Indices
This app was developed to help in different emergencies to detect the affected area using various remote sensing indices depending on the type of disaster to get precise results for a damaged area. 

three different indices were used, namely Normal Burn Area Index (BAI),  Normalized Difference Water Index (NDWI), and  Normalized Difference Vegetation Index (NDVI). These indices were used for the following disasters forest fire, flood, and deforestation, respectively. 


## Normal Burn Area Index (BAI)
It was used to detect the burn area. In this case, Burn Area Index (BAI) was used to highlight the burnt area, especially in the vast areas, using the following formula:

                                                  BAI=1/((0.1+(Red))^2*(0.06-NIR)^2)

Which Red is a red band and NIR is near infrared band. The value range of the BAI is 0 to 100.
The difference between post-BAI and pre-BAI was used to estimate the burn severity. The high value of the difference will represent severe damage, low and negative values representing the less damaged area.

BAI was used to detect the burnt area for wildfires in Emperador, Chile. 


## Normalized Difference Water Index (NDWI) 
This index's primary use is monitoring different water bodies. Therefore, it helps to detect the flooded area.  Normalized Difference Water Index (NDWI) calculated using the following formula: 

                                                    NDWI = (NIR – SWIR) / (NIR + SWIR)

 Which NIR is a red band and SWIR is a shortwave infrared. The value range of the NDWI is -1 to 1.

NDWI was used to detect the affected area by Russian river flooding in California in February 2019. The user just selected the dates before and after the flood. Then GEE started looking for appropriate images with less percentage of clouds. Then, NDWI was used to distinguish the original water body from the new water area (flooded area).


## Normalized Difference Vegetation Index (NDVI)
The rainforest is considered the much-effected area by deforestation and losing trees, so it is very important to build a system to monitor the vegetation and detect the much-effected areas by deforestation. Google engine can monitor the vegetation using a time series of images and highlight the affected area. This app shows the capability of GEE for monitoring vegetation. By analyzing the difference of NDVI between two images acquired at different dates.  

         
                                                    NDVI = (NIR – Red) / (NIR + Red)

Which NIR is a near infrared band and Red is a red band. NDVI values range from -1 to 1.


                                                     
[Go Back](README.md)
