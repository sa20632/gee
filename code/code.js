// create the title
var title = ui.Label('Change Detection for Emergency Management', {fontWeight: 'bold', fontSize: '24px'});
title.style().set('position', 'top-center');
Map.add(title);

// panel for the range dates
var paneldate = ui.Panel({
  layout: ui.Panel.Layout.flow('vertical'),
  style: {width: '400px',
  height: '40%',
  position: 'bottom-left',
  border: 'solid',
  
  }
});

// global variables used in the script
var scene ;
var sceneAfter ;
var countBefore;
var countAfter;
var baiRGB;
var changedetectionRGB;
var floodArea;
var changedetction;
var disasterZone;
var task;

// function trigger when click on the map to show the functional panel
var getlocation = function(){

  paneldate.clear();
 
  //create variable to store the location of points, polygon,line
  var points = Map.drawingTools().layers().get(0).toGeometry();
  // collection of maps Landsat 
  var LandsatCollection = ee.ImageCollection('LANDSAT/LC08/C01/T1_TOA');

  var ImageFilter = LandsatCollection.filterBounds(points);
  print('spatialFiltered', ImageFilter);
  // Filter the image by the date
  var start = ee.Image(LandsatCollection.first()).date().get('year').format();
  var now = Date.now();
  var end = ee.Date(now).format();
  var slider = ui.Slider();
  // create range date for the image before
  var dateRange = ee.DateRange(start, end).evaluate(function(range) {
    var dateSlider = ui.DateSlider({
      start: range['dates'][0],
      end: range['dates'][1],
      value: null,
      style:{width: '300px'},
      period: 15,
      onChange: function(range){
        var mosaic = ImageFilter.filterDate(range.start(), range.end());
        var sorted = mosaic.sort('CLOUD_COVER');
        scene = sorted.first();
        countBefore = mosaic.size();

      }
    });
    // create label for the date range before
    var datebeforelabel = ui.Label('Set the date range before');
    
    paneldate.add(datebeforelabel);
    paneldate.add(dateSlider);

    Map.add(panel);
  });
  // create date range for the image after
  var dataRangeAfter = ee.DateRange(start, end).evaluate(function(range){
         var dateSliderafter = ui.DateSlider({
           start: range['dates'][0],
           end: range['dates'][1],
           value: null,
           style:{width: '300px'},
           period: 7,
           onChange: function(range){
             var mosaicAfter= ImageFilter.filterDate(range.start(), range.end());
             var sorted = mosaicAfter.sort('CLOUD_COVER');
             sceneAfter = sorted.first();
             countAfter = mosaicAfter.size();
             
           }
           });
    // create label for the date range after
    var dateafterlabel = ui.Label('Set the date after');
    paneldate.add(dateafterlabel);
    paneldate.add(dateSliderafter);
    
    // create button to start new session
    var button = ui.Button({
       label: 'New session',
       onClick: function() {
         Map.drawingTools().layers().reset();
         scene ;
         sceneAfter;
         disasterZone;
         Map.clear();
         Map.add(title);
         Map.add(select);
       }
      
    });
    
// create button to catch the image 
    var Runbutton = ui.Button({
      label: 'Get the images',
      onClick: function(){
        var NumberImageBefore = countBefore.getInfo();
        var NumberImageAfter = countAfter.getInfo();
        if(NumberImageBefore <= 0){
           alert('Sorry, we can not find an image before the event in this period of time');
        }else if(NumberImageAfter <=0){
          alert('Sorry, we can not find an image after or during the event in this period of time');
          
        } else{
          var visParams = {bands: ['B6', 'B5', 'B4']};
          Map.addLayer(scene, visParams, 'The image before');
          var visParamsAfter = {bands: ['B6', 'B5', 'B4']};
          Map.addLayer(sceneAfter, visParamsAfter, 'The image after or during')
        }
          
          
      }
    });
    
    paneldate.add(button);
    paneldate.add(Runbutton);

    
  });
  
};

// trigger the getlocation function when start drawing on the map
Map.drawingTools().onDraw(getlocation);


// create the left panel
var panel = ui.Panel({
  layout: ui.Panel.Layout.flow('vertical'),
  style: {width: '500px',
  height: '80%',
  position: 'bottom-left'
    
  }
});



// create panel to contain the check box od disaster types
var panelsituation = ui.Panel({
  layout: ui.Panel.Layout.flow('vertical'),
  style: {width: '400px',
  height: '40%',
  position: 'bottom-left',
  border: 'solid',
  
  }
});
// Create the title of chechbox
var title1 = ui.Label('Choose the emergency situation');
title.style().set('position', 'top-center');
panelsituation.add(title1)

// create flood check box
var FloodCheckBox = ui.Checkbox('Flood', false);
FloodCheckBox.onChange(function(checked){
  // Run the NDWI ALGORITHM
   if (sceneAfter === undefined ){
             alert ('Please select image after')
             }
             if (scene === undefined ){
               alert ('Please select image before')
               
             }  
             if (scene !== undefined && sceneAfter !== undefined ){
               var green = scene.select('B3');
               var nir = scene.select('B5');
               var ndwi = green.subtract(nir).divide(green.add(nir)).rename('NDWI');
               Map.addLayer(ndwi, '', 'NDWI Before',false);
               var green1 = sceneAfter.select('B3');
               var nir1 = sceneAfter.select('B5');
               var ndwiAfter = green1.subtract(nir1).divide(green1.add(nir1)).rename('NDWI After');
               Map.addLayer(ndwiAfter,'', 'NDWI After',false);
               floodArea = ndwiAfter.subtract(ndwi);
               floodArea = floodArea.visualize({})
               Map.addLayer(floodArea, '', 'Flooded Area');
             }
  
  
});

// create forest fire checkbox
var FireCheckBox = ui.Checkbox('Forest Fire', false);
FireCheckBox.onChange(function(checked){
  // Run Burn Area Index (BAI) Algotithm
           if (sceneAfter === undefined ){
             alert ('Please select image after')
             
           }

           if (scene !== undefined && sceneAfter !== undefined ){
               
               var nbrAfter = sceneAfter.expression(
                 '1 / ((0.1 - RED)**2 + (0.06 - NIR)**2)',{
                   'RED' : sceneAfter.select('B4'),
                   'NIR' : sceneAfter.select('B5'),
                 }
                 );
               baiRGB = nbrAfter.visualize({
                 min: 0.0,
                 max: 100.0
               });
               Map.addLayer(baiRGB, '', 'Burned Area ');
               Map.centerObject(baiRGB, 9);
               
             }
           
  
});

// create Deforestation checkbox
var DeforestationCheckBox = ui.Checkbox('Deforestation', false);
   // Run NDVI Algotithm
     DeforestationCheckBox.onChange(function(checked){
       if (sceneAfter === undefined ){
         alert ('Please select image after')
       }
       if (scene === undefined ){
         alert ('Please select image before')
       }
       if (scene !== undefined && sceneAfter !== undefined ){
            var nir = scene.select('B5');
            var red = scene.select('B4');
            var ndvi = nir.subtract(red).divide(nir.add(red)).rename('NDVI');
            Map.centerObject(scene, 9);
            var ndviParams = {min: -1, max: 1, palette: ['blue', 'white', 'green']};
            Map.addLayer(ndvi, ndviParams, 'NDVI Before ',false);
            var nir1 = sceneAfter.select('B5');
            var red1 = sceneAfter.select('B4');
            var ndviAfter = nir1.subtract(red1).divide(nir1.add(red1)).rename('NDVI After');
            Map.centerObject(sceneAfter, 9);
            var ndviParams1 = {min: -1, max: 1, palette: ['blue', 'white', 'green']};
            Map.addLayer(ndviAfter, ndviParams1, 'NDVI After',false);
            changedetction = ndviAfter.subtract(ndvi);
            changedetectionRGB = changedetction.visualize({
              min: -1,
              max: 1, 
              palette: ['blue', 'white', 'green']
            })
            Map.addLayer(changedetectionRGB, '', 'Change Detection for Deforestation');
            Map.centerObject(changedetectionRGB, 9);


            
       } else{
         alert ('Try again')
       }});
  
     

// create clip function
var clip = ui.util.debounce(function(){
  var polygon = Map.drawingTools().layers().get(0).toGeometry();
  if (baiRGB !== undefined){
    disasterZone = baiRGB.clip(polygon);
    Map.addLayer(disasterZone);
    Map.drawingTools().layers();

  }
  if(floodArea !== undefined){
    disasterZone = floodArea.clip(polygon);
    Map.addLayer(disasterZone);
    Map.drawingTools().layers();
  }
  if (changedetectionRGB !== undefined) {
    disasterZone = changedetectionRGB.clip(polygon);
    Map.addLayer(disasterZone);
    Map.drawingTools().layers();
  }


  
}, 100);

// create clip button 
var clipButton = ui.Button({
    label: 'Clip image',
    onClick: function() {
      Map.drawingTools().setLinked(false);
      Map.drawingTools().addLayer([]);
      Map.drawingTools().setShape('polygon');
      Map.drawingTools().draw();
      Map.drawingTools().onDraw(clip);

    },
    style: {
        color: 'red',
    },
});



// download image button
function downloadImage() {
    var viewBounds = ee.Geometry.Rectangle(Map.getBounds());
    var downloadArgs = {
      name: 'ee_image',
      crs: 'EPSG:5070',
      scale: 30,
      region: viewBounds.toGeoJSONString()
    };
    var url = disasterZone.getDownloadURL(downloadArgs);
    urlLabel.setUrl(url);
    urlLabel.style().set({shown: true});
}
var DownloadButton = ui.Button('Download Disaster Zone', downloadImage);
var urlLabel = ui.Label('Download', {shown: false});
var downloadpanel = ui.Panel([DownloadButton, urlLabel]);

// Add bookmarks Button
var places = {
  RussianRiver: [-122.8177, 38.5277],
  EmpedradoChile: [-72.4302, -35.3652]

};

var select = ui.Select({
  items: Object.keys(places),
  onChange: function(key) {
    Map.setCenter(places[key][0], places[key][1], 12);
  }
});

// Set a place holder.
select.setPlaceholder('Bookmarks');


//Add panels to the map
panel.add(paneldate);
panel.add(panelsituation)
panelsituation.add(FireCheckBox);
panelsituation.add(FloodCheckBox);
panelsituation.add(DeforestationCheckBox);
panelsituation.add(clipButton);
panelsituation.add(downloadpanel);
Map.add(select);