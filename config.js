module.exports = {
    'token': process.env.DISCORD_TOKEN || '', // Your bot token, activate all bot intents in discord developer portal.
    'clientid': process.env.DISCORD_CLIENT_ID || '', // Your discord bot id.
    'guildid': process.env.DISCORD_GUILD_ID || '', // Id of a private server to load the bot's slash commands.
    'ownerid': (process.env.DISCORD_OWNER_IDS || '').split(',').map(s => s.trim()).filter(Boolean), // Comma-separated discord ids
    'webhook': process.env.DISCORD_WEBHOOK || '' // Your discord webhook url.
}