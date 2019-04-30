## Muggles Sheet
You can use Muggle Sheet to log data  in Google Sheet with your own Log Schema. 
Easist way to matain your logs.

#### Usage
- [x] User can log data in Google Sheet
- [x] with API Support

#### How to Setup
1. Get `Google Sheet Config` File from `Google Developer Console` and replace the `google_sheet_confog.json` in the root of your project.

```
{
  "type": "service_account",
  "project_id": "mugglessheet",
  "private_key_id": "96440a53336bf3e4717adff081cdee5f3141dc97",
  "private_key": "-----BEGIN PRIVATE KEY-----xxxxxxx \n-----END PRIVATE KEY-----\n",
  "client_email": "edit-google-sheets@mugglessheet.iam.gserviceaccount.com",
  "client_id": "1018xxxxxxx46872",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/edit-xxxxxxx.iam.gserviceaccount.com"
}

```

2. Design your Schema on Google Sheet like this (or, you can have your own).

#### Read Logs
```
curl -X GET \
  https://mugglesheet.herokuapp.com/log/ \
  -H 'Content-Type: application/json' \
  -H 'cache-control: no-cache'
```

Response Would be like, 
```json
{
    "totalRows": 3,
    "data": [
        {
            "rowId": "https://spreadsheets.google.com/feeds/list/17qX9wgyPWJvn23xRMljCMeItgRDzYKO6Xi4OV54fAxA/1/cokwr",
            "title": "Wizard Payment Failed ",
            "description": "When User paying for Wizard Subscription using PayTM ",
            "userInfo": "{ appName: \"Abhishek\" }",
            "timestamp": "1234567890123",
            "status": "fail"
        },
        {
            "rowId": "https://spreadsheets.google.com/feeds/list/17qX9wgyPWJvn23xRMljCMeItgRDzYKO6Xi4OV54fAxA/1/cpzh4",
            "title": "Booking Failed",
            "description": "When User paying for Adyen Payment Gateway",
            "userInfo": "{ appName: \"LOL\" }",
            "timestamp": "1234567890123",
            "status": "fail"
        },
        {
            "rowId": "https://spreadsheets.google.com/feeds/list/17qX9wgyPWJvn23xRMljCMeItgRDzYKO6Xi4OV54fAxA/1/cre1l",
            "title": "Booking Success",
            "description": "Booking for Hotel 12N67",
            "userInfo": "{ appName: \"LOL\" }",
            "timestamp": "1234567890123",
            "status": "success"
        }
    ]
}
```

#### Create Log
```
curl -X POST \
  https://mugglesheet.herokuapp.com/log \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: ea1cb0e7-4b8a-4462-a758-2d187d6a8270' \
  -H 'cache-control: no-cache' \
  -d '{ "logs" : [
		{
			"title":"Payment View Fail",
			"description":"Fo Hotel ID OYO1232",
			"timestamp":"3235456532234",
			"userInfo":"{data:'\''lol'\''}",
			"status":"fail"
		}
	]
}'
```

Response would be like, 
```json
{
    "message": "Success"
}
```

#### Open Issues
- [ ] Average Response time is around 3.x seconds which is quite high.
- [ ] Writing Error for some schema

#### Contribution
Abhishek Kumar Ravi (ab.abhishek.ravi@gmail.com)