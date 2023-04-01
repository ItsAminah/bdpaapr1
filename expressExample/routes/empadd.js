var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('empadd', { title: 'Products Are Us Employee Add' });
});

router.post('/', function(req, res, next) {
  req.body.createdBy="bdpa_adminamina";
  req.body.modifiedBy="bdpa_adminamina";
  const httpRequest = require('http');

  const options = {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer' + global.DB_token,
      'content-type':'application/json'
    }};

    
 const data=JSON.stringify(req.body);

    const request = httpRequest.request('http://bdpamkedev.com/api/v5/employees', options, response => {
          console.log('Status', response.statusCode);
          //console.log('Headers', response.headers);
});
request.on('error', error => console.log('ERROR', error));

request.write(data);
request.end();
  res.render('empadd', {title: 'Employee Added!'});
});

module.exports = router;