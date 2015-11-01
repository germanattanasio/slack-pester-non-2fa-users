# slack-pester-non-2fa-users
[![Build Status](https://api.travis-ci.org/germanattanasio/slack-pester-non-2fa-users.svg)](https://travis-ci.org/germanattanasio/slack-pester-non-2fa-users)

Bluemix application to annoy users who do not have [2 Factor Authentication](https://slack.zendesk.com/hc/en-us/articles/204509068-Enabling-two-factor-authentication) enabled.

The app will send a message in the `#general` channel and to each user in a private channel until they enable 2F authentication.

## Getting Started

In order to use the application you will need two tokens, one from an admin and another one from a bot. The admin token will be use to retrieve the user list and check who has 2FA. The bot token will be use to send a message to the users.  
**Bots are not allowed to see if users have 2FA that's why we need the admin token.**

1. Get the bot token by creating and configuring a Bot in your Slack team
  ```
  https://team-name.slack.com/services/new/bot
  ```
  Make sure to replace `team-name` with your team name.
1. Copy the generated token (this is your `SLACK_BOT_API_KEY`)
1. Go to https://api.slack.com/methods/users.list/test
2. Click on **Test** and copy the token (this is your `SLACK_ADMIN_API_KEY`)


#### Creating the app in Bluemix
1. Push this application to bluemix  
  [![Deploy to Bluemix](https://bluemix.net/deploy/button.png)](https://bluemix.net/deploy?repository=https://github.com/germanattanasio/slack-pester-non-2fa-users)

1. Add a `SLACK_BOT_API_KEY` and `SLACK_ADMIN_API_KEY` environment variables.

## License

This library is licensed under Apache 2.0. Full license text is available in [COPYING](https://github.com/germanattanasio/slack-pester-non-2fa-users/blob/master/LICENSE).
