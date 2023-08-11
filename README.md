# Список пользователей GitHub

**Реализованный функционал:**

- [x] Поиск пользователей GitHub по заданной подстроке.
- [x] Сортировка по количеству репозиториев.
- [x] Просмотр карточки пользователя с подбробной информацией и ссылкой на профиль на GitHub.

Данные по пользователям берутся с API GitHub:<br>
[https://developer.github.com/v3/search/#search-users](https://developer.github.com/v3/search/#search-users)


**Для запуска проекта выполните команды:**<br>
`npm install`<br>
`npm run start`

Проект выполнен на React + Typescript.<br>
Для стилизации использована библиотека Styled Components.<br>

**Написаны 2 юнит-теста:**

1. Запуск функции поиска списка пользователь, при нажатии а кнопку "Search".
2.  При клике на кнопку, функция onSort вызывается с правильным аргументом ('asc') и метка кнопки обновляется правильно при изменении порядка сортировки.

**Запустить тесты:**<br>
`npm run test`

# Деплой
Осуществлён на render.com:<br>
[https://github-users-u18z.onrender.com/](https://github-users-u18z.onrender.com/)
