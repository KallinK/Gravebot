import nconf from 'nconf';
import R from 'ramda';


const permissions = [
  '0x0000002', // Kick Members
  '0x0000004', // Ban Members
  '0x0000008', // Manage Roles
  '0x0000010', // Manage Channels
  '0x0000400', // Read Messages
  '0x0000800', // Send Messages
  '0x0002000', // Manage messages
  '0x0004000', // Embed Links,
  '0x0008000', // Attach files
  '0x0010000' // Read message history
];

const permission_value = R.sum(R.map(parseInt, permissions));
const join_link = `https://discordapp.com/oauth2/authorize?&client_id=${nconf.get('CLIENT_ID')}&scope=bot&permissions=${permission_value}`;
const join_text = 'To invite me to your server, click the link below and select a server.\nOnly users with **Manage Server** permission in that server are able to invite me to it. You may remove some of the permissons if you wish, but be warned it may break current and upcoming features.';

function joinServer(bot, msg, suffix) {
  bot.sendMessage(msg.channel, `${msg.author} ${join_text} ${join_link}`);
}

export default {
  invite: joinServer,
  join: joinServer,
  joinserver: joinServer,
  'join-server': joinServer
};

export const help = {
  join: {}
};
