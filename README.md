# place-server

Сервер для проекта Place

* [https://api.xryctdm-place.gq]


* [http://84.201.133.77]


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
| POST api.xryctdm-place.gq/signup                         | создаёт пользователя    |
| POST api.xryctdm-place.gq/signin                         | аутентификация пользователя    |
| GET api.xryctdm-place.gq/users                           | возвращает всех пользователей    |
| GET api.xryctdm-place.gq/users/:userId                   | возвращает пользователя по _id    |
| GET api.xryctdm-place.gq/cards                           | возвращает все карточки |
| POST api.xryctdm-place.gq/cards                          | создаёт карточку |
| DELETE api.xryctdm-place.gq/cards/:cardId                | удаляет карточку по идентификатору |
| Несуществующий адрес                               | { "message": "Запрашиваемый ресурс не найден" }  |
