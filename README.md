# Simple Tasks Backend

Проект представляет собой серверное приложение на **NestJS** с **GraphQL** и подключением к базе данных **PostgreSQL**. В этом README описан пошаговый процесс установки и запуска проекта, а также взаимодействия с ним.

---

## 1. Установка проекта

### 1.1 Клонирование репозитория
- git clone <ссылка на репозиторий>
- cd simple-tasks-backend

### 1.2 Установка зависимостей
yarn install

### 1.3 Настройка PostgreSQL
- brew install postgresql
- brew services start postgresql
- psql -U postgres
- CREATE DATABASE test_db;

### 1.4 Миграции и подключение
- yarn typeorm migration:run

### 1.5 Запуск сервера
- yarn start
http://localhost:3000/graphql

### 2.Полезные команды

Типы миграций с TypeORM:

Создание миграции:
- yarn typeorm migration:generate -n <migration_name>

Применение миграций:
- yarn typeorm migration:run