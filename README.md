# place-server

Сервер для проекта Place

## Установка

Скопируйте проект к себе на компьютер:
```
git clone https://github.com/xryctdm/place-server.git
```
Установите зависимости:
```
npm install
```

## Работа

Запустите сервер командой:
```
npm run start
```
Запустите сервер с hot reload:
```
npm run dev
```

Используйте Postman:

| ЗАПРОС                                             | ОТВЕТ              |
| ---------------------------------------------------| ------------------ |
| GET localhost:3000/users                           | возвращает всех пользователей    |
| GET localhost:3000/users/:userId                   | возвращает пользователя по _id    |
| POST localhost:3000/users                          | создаёт пользователя    |
| GET localhost:3000/cards                           | возвращает все карточки |
| POST localhost:3000/cards                          | создаёт карточку |
| DELETE localhost:3000/cards/:cardId                | удаляет карточку по идентификатору |
| Несуществующий адрес                               | { "message": "Запрашиваемый ресурс не найден" }  |
