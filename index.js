const TelegramBot = require("node-telegram-bot-api")
const gameOptions = require("./options")

const token = '5570408069:AAEBcro5hedivyOYInIXdFrMF3RbuGgYat4'

const bot = new TelegramBot(token, { polling: true })


const start = () => {
    bot.setMyCommands([
        { command: "/start", description: "Приветствие" },
        { command: "/options", description: "Основные опции бота?" }
    ])


    bot.on("message", async msg => {
        const text = msg.text
        const chatId = msg.chat.id
        const startMsg = "Добро пожаловать в чат-бот любителей быть посланными"
        const optionsStartMsg = "Выбери свою судьбу"

        if (text === "/start") {
            await bot.sendMessage(chatId, startMsg)
            return bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/ed7/9d9/ed79d931-0e90-4350-85f7-c5adfa92c47b/1.webp")
        }

        if (text === "/options") {
            await bot.sendMessage(chatId, optionsStartMsg)
            return bot.sendMessage(chatId, "Вперед обмудок!", gameOptions)
        }
        return bot.sendMessage(chatId, "Ну че ты хуйню всякую пишешь, совсем ебанько?")
    })
    bot.on("callback_query",  async msg => {
        const chatId = msg.message.chat.id

         if (msg.data === "Пойти на хуй") {
              await bot.sendMessage(chatId, "Иди на хуй")
              await bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/ed7/9d9/ed79d931-0e90-4350-85f7-c5adfa92c47b/12.webp")
        }
        if (msg.data === "Пойти в пизду") {
              await bot.sendMessage(chatId, "Иди в пизду")
              await bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/ed7/9d9/ed79d931-0e90-4350-85f7-c5adfa92c47b/6.webp")
        }
         if (msg.data === "Пойти в жопу") {
              await bot.sendMessage(chatId, "Иди в жопу")
              await bot.sendSticker(chatId, "https://tlgrm.ru/_/stickers/80a/5c9/80a5c9f6-a40e-47c6-acc1-44f43acc0862/1.webp")
            }
        })
}
start()