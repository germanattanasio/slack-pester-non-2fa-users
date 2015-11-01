/**
 * Copyright 2015 IBM Corp. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

var Slack = require('slack-node');

var slackPolicy = 'To use Slack you must have 2FA enabled.'+
  'You will be reminded every 24 hours until you enabled 2FA.\n\n' +
	'Every so often we will disable accounts that do not have 2FA turned on. ' +
  'To avoid this please turn on 2FA now. ' +
  'Instructions for 2FA can be found at ' +
  'https://slack.zendesk.com/hc/en-us/articles/204509068-Enabling-two-factor-authentication.\n\n';

var CHANNEL_GENERAL = '#general';
var ONE_DAY = 24*60*60*1000;
/**
 * Filter and return the users without 2FA enabled
 * @param  {Array} users The users to filter
 * @return {Array} The users without 2FA enabled
 */
function getUsersWithout2FA (users) {
    if (!users)
      return [];
    return users.filter(function(u) {
      return u.is_bot === false && u.has_2fa === false && u.deleted === false;
    }).map(function(u){
      return u.name;
    });
}

/**
 * Send a message to #general with the users that do not have 2FA
 * @param  {Slack} client The slack client
 * @param  {Array} users  The users
 */
function shameUsers (client, users) {
  if (!users || users.length === 0)
    return;
  var message = 'Hello everyone...\n\n' +
		'The following users have not enabled 2 Factor auth ' +
    users.join(', ') + '\n\n' +
		slackPolicy;

	sendMessage(client, CHANNEL_GENERAL, message);
}

/**
 * Send a private message to a user
 * @param  {Slack} client The slack client
 * @param  {Array} user  The user
 */
function annoyUser(client, user){
	var message = 'You have been identied as a user that does not have 2 Factor Auth (2FA).\n\n' +
  slackPolicy;

	sendMessage(client, '@' + user, message);
}

/**
 * Sends a message
 * @param  {Slack} client  The Slack client
 * @param  {String} channel The channel or username
 * @param  {String} message The message
 */
function sendMessage (client, channel, message) {
  console.log(channel,message.slice(0,50));
  // client.api('chat.postMessage', {
  //   text: message,
  //   channel: channel
  // }, function(err, response) {
  //   if (err){
  //     console.log('there was an error');
  //   } else {
  //     console.log(response);
  //   }
  // });
}

/**
 * Annoying users without 2FA authentication
 */
function check2FA() {
  var adminSlack = new Slack(process.env.SLACK_ADMIN_API_KEY || '<admin-token>');
  var botSlack = new Slack(process.env.SLACK_BOT_API_KEY || '<bot-token>');
  adminSlack.api('users.list', function(err, response) {
    if (err){
      console.log('users.list error:', err);
    } else {
      var users  = getUsersWithout2FA(response.members);
      shameUsers(botSlack, users);
      users.map(annoyUser.bind(this,botSlack));
    }
  });
}

setInterval(check2FA, ONE_DAY);
check2FA();
