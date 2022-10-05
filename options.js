const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{ text: "Пойти на хуй", callback_data: "Пойти на хуй" }],
            [{ text: "Пойти в пизду", callback_data: "Пойти в пизду" }],
            [{ text: "Пойти в жопу", callback_data: "Пойти в жопу" }],
        ]
    })
}
module.exports = gameOptions