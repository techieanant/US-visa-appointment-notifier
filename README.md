# US-visa-appointment-notifier

This is just a script I put together to check and notify me via ([PushBullet](https://www.pushbullet.com/)) when there's an earlier date before my initial appointment date. It doesn't handle **rescheduling**. 


```
$ npm start
=====>>> Step: starting process with 250 tries left
=====>>> Step: logging in
=====>>> Step: checking for schedules
[{"date":"2023-02-08","business_day":true},{"date":"2023-04-26","business_day":true},{"date":"2023-10-11","business_day":true}]
=====>>> Step: starting process with 249 tries left
=====>>> Step: checking for schedules
[{"date":"2023-04-26","business_day":true},{"date":"2023-10-11","business_day":true}]
=====>>> Step: starting process with 248 tries left
=====>>> Step: checking for schedules
[{"date":"2023-10-11","business_day":true}]
=====>>> Step: sending an email to schedule for 2023-10-11
...
```

## How it works

* Logs you into the portal
* checks for schedules by day 
* If there's a date before your initial appointment, it notifies you via email
* If no dates found, the process waits for set amount of seconds to cool down before restarting and will stop when it reaches the set max retries.

> see `config.js` or `.env.example` for values you can configure

## Configuration

copy the example configuration file exampe in `.env.example`, rename the copied version to `.env` and replace the values.

### PusbBullet config values 

You can create a free account with pushbullet and generate an access token at https://www.pushbullet.com/#settings/account

## FAQ

* How do I get my facility ID - https://github.com/theoomoregbee/US-visa-appointment-notifier/issues/3
* How do I get my schedule ID - https://github.com/theoomoregbee/US-visa-appointment-notifier/issues/8, https://github.com/theoomoregbee/US-visa-appointment-notifier/issues/7#issuecomment-1372565292

## How to use it

* clone the repo 
* run `npm i` within the cloned repo directory
* start the process with `npm start`


