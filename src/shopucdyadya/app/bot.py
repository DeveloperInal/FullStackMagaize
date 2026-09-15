import asyncio
import logging
import sys

from aiogram import Bot, Dispatcher, html
from aiogram.client.default import DefaultBotProperties
from aiogram.enums import ParseMode
from aiogram.filters import CommandStart
from aiogram.types import Message

from shopucdyadya.app.config import settings

dp = Dispatcher()


@dp.message(CommandStart())
async def command_start_handler(message: Message) -> None:
    await message.answer(f"Hello, {html.bold(message.from_user.full_name)}!")


@dp.message()
async def echo_handler(message: Message) -> None:
    try:
        await message.send_copy(chat_id=message.chat.id)
    except TypeError:
        await message.answer("Nice try!")

async def _run() -> None:
    try:
        bot = Bot(token=settings.bot_token.get_secret_value(), default=DefaultBotProperties(parse_mode=ParseMode.HTML))
        await dp.start_polling(bot)
    except KeyboardInterrupt:
        print("Бот остановлен!")
        
def main() -> None:
    logging.basicConfig(level=logging.INFO, stream=sys.stdout)
    try:
        asyncio.run(_run())
    except KeyboardInterrupt:
        print("Бот остановлен!")


if __name__ == "__main__":
    main()