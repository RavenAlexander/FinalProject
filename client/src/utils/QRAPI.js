//CURRENTLY UNUSED FILE, CONTAINS INFO ABOUT THE BARCODE API FROM CLOUDMERSIVE.COM

//BARCODE LOOKUP 
var CloudmersiveBarcodeapiClient = require('cloudmersive-barcodeapi-client');
var defaultClient = CloudmersiveBarcodeapiClient.ApiClient.instance;

// Configure API key authorization: Apikey
var Apikey = defaultClient.authentications['Apikey'];
Apikey.apiKey = '5856f869-7c95-49fb-8b5c-7162629fdbea';



var apiInstance = new CloudmersiveBarcodeapiClient.BarcodeLookupApi();

var value = "value_example"; // String | Barcode value


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.barcodeLookupEanLookup(value, callback);

//GENERATE

var apiInstance2 = new CloudmersiveBarcodeapiClient.GenerateBarcodeApi();

var value2 = "value_example"; // String | QR code text to convert into the QR code barcode


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.generateBarcodeQRCode(value, callback);