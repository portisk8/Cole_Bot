import { Context, Markup, Telegraf, Telegram } from 'telegraf';
import { Update } from 'typegram';
import { Action } from './actions';

import config from './config';
import { KeyBoardType } from './enums/keyBoardType';
import { KeyBoard } from './keyboard';
import './database';
import { InitialSetup } from './InitialSetup/InitialSetup';

const token: string = config.BOT_TOKEN as string;
const telegram: Telegram = new Telegram(token);
const bot: Telegraf<Context<Update>> = new Telegraf(token);
const chatId: string = process.env.CHAT_ID as string;

InitialSetup();
const action = new Action();
const keyboard = new KeyBoard();

bot.start((ctx) => {
  ctx.reply(
    'Hello ' + ctx.from.first_name + '!',
    keyboard.getKeyBoardByType(KeyBoardType.Main)
  );
});

bot.help((ctx) => {
  ctx.reply('Send /start to receive a greeting');
  ctx.reply('Send /keyboard to receive a message with a keyboard');
  ctx.reply('Send /quit to stop the bot');
});

bot.command('quit', (ctx) => {
  // Explicit usage
  ctx.telegram.leaveChat(ctx.message.chat.id);

  // Context shortcut
  ctx.leaveChat();
});

bot.command('keyboard', (ctx) => {
  ctx.reply(
    'Keyboard',
    Markup.inlineKeyboard([
      Markup.button.callback('First option', 'first'),
      Markup.button.callback('Second option', 'second')
    ])
  );
});

bot.on('text', (ctx) => {
  ctx.reply(action.getResult(ctx.message.text));

  if (chatId) {
    telegram.sendMessage(
      chatId,
      'This message was sent without your interaction!'
    );
  }
});

bot.launch();

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));
