# slack-pester-non-2fa-users
[![Build Status](https://api.travis-ci.org/IBM-Bluemix/slack-pester-non-2fa-users.svg)](https://travis-ci.org/IBM-Bluemix/slack-pester-non-2fa-users)

Bluemix application to annoy users who do not have 2 Factor Authentication enabled.

## Getting Started

In order to use the application you will need an `token` from Slack.


1. Create a Bot in your Slack team
  ```
  https://TEAM-NAME.slack.com/services/new/bot
  ```
  Make sure to replace `TEAM-NAME` with your team name.
1. Copy the generated `token`


#### Creating the app in Bluemix
1. Push this application to bluemix  
  [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/germanattanasio/slack-pester-non-2fa-users)

1. Add a `SLACK_API_KEY` environment variable with the `token` you got from slack

## License

This library is licensed under Apache 2.0. Full license text is available in [COPYING][LICENSE].
