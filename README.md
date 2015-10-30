# slack-pester-non-2fa-users
[![Build Status](https://api.travis-ci.org/germanattanasio/slack-pester-non-2fa-users.svg)](https://travis-ci.org/germanattanasio/slack-pester-non-2fa-users)

Bluemix application to annoy users who do not have [2 Factor Authentication](https://slack.zendesk.com/hc/en-us/articles/204509068-Enabling-two-factor-authentication) enabled.

The app will send a message in the `#general` channel and to each user in a private channel until they enable 2F authentication.

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
