# Яндекс.Погода

## Разработка

### Команды
`npm i`

`npm run dev` - запуск `webpack-dev-server` на `localhost:4800` c hot-reload

`npm run storybook` - дока по реакт компонентам на `localhost:9001`

### Структура проекта

`src/ui` - компоненты интерфейса по методологии [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)

#### Структура компонента
Компоненты именуем с большой буквы. Используем camelCase.

- `ComponentName`
 - `ComponentName.js` - компонент с default export-ом.
 - `ComponentName.story.js` - дока
 - `ComponentName.test.js` - юнит тест (optional)
 - `index.js`  - `export { default } from './ComponentName'`

#### Redux

Для создания экшенов используется `redux-act`

### Соглашения по неймингу для синхронизации в YouTrack

Название **ветки** - по номеру таска в YouTrack. Например, `WF-21`

Название **коммита** - обязательно номер таска после сообщения коммита. Например, `Сделал readme #WF-21`

#TODO описание для CI