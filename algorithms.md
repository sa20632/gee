# Change detection algorithms
This apps developed to help in different emergency situations to detect the affected area using different change detection algorithms depending on the type of disaster to get a precise results for a damage area. When the user choose the type of the disaster in the study area a specific algorithm will be trigger to detect the change managment.

This tool used three different algorithms namely Normal Burn Area Index (BAI),  Normalized Difference Water Index (NDWI) and  Normalized Difference Vegetation Index (NDVI). These algorithms represent the following disasters forest fire, flood and deforestation respectively. 


## Normal Burn Area Index (BAI)
It is used for forest fire that considerd as one of the biggest natural disaster that may threat the human life and destroy the vegetation in a wide range of area, so it is important for the emergency organization to detect the burn area during the fire to know how to deal with it and response in affected way to save the people and reduce the amount of loses. In this case, we are using Burn Area Index (BAI) to highlight the burnt area especially in a very wide area, using the following formula:

                                                  BAI=1/((0.1+〖Red)〗^2*(0.06-NIR)^2)

Which Red is a red band and NIR is near infrared band, and the values range between 0 and 100.
The difference between post BAI and pre BAI, will be used to estimate the burn severity, the high value of the difference will represent high severe damage, low and negative values representing the less damage area. 


## Normalized Difference Water Index (NDWI) 
The main used for this index is monitoring different water body like river in a very easy way because of the huge amount of satellite data, and google engine make it easier to use all of the different sources. Flood is one of the most natural disaster occurrences during the year in different areas, so it is important to detect the flooded area to enhance the emergency management process. Normalized Difference Water Index (NDWI) as the following formula used to monitor the water body before and after.

                                                    NDWI = (NIR – SWIR) / (NIR + SWIR)

 Which NIR is a red band and SWIR is a shortwave infrared. 

change detection between after and before the flood event used to detect the flooded area, the pixels difference band between the two images that have been selected just the pixels that have zero value before the flood and have value more than 0.4  in the image after the flood to distinguish the original water body from the new water area (flooded area).


## Normalized Difference Vegetation Index (NDVI)
The rain forest considered as the much-effected area by deforestation and losing tress, so it very important to build a system to monitor the vegetation and detect the much-effected area by deforestation. Google engine has a capability to monitor the vegetation during a long time using a time series of image and highlight the effected area. This app let the user to detect the clearance area of trees between two images b applying NDVI algorithm on the two images and then use map algebra to detect the change between the images.
         
                                                    NDVI = (NIR – Red) / (NIR + Red)

Which NIR is a near infrared band and Red is a red band


                                                     
[Go Back](README.md)