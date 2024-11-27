# CRM System Backend

Проект представляет собой серверное приложение на **NestJS** с **GraphQL** и подключением к базе данных **PostgreSQL**. В этом README описан пошаговый процесс установки и запуска проекта, а также взаимодействия с ним.

---

## 1. Установка проекта

### 1.1 Клонирование репозитория
- git clone <ссылка на репозиторий>
- cd crm-backend

### 1.2 Установка зависимостей
yarn install

### 1.3 Настройка PostgreSQL
- brew install postgresql
- brew services start postgresql
- psql -U postgres
- CREATE DATABASE crm_db_test;

### 1.4 Миграции и подключение
- npx prisma migrate dev --name init


### 1.5 Запуск сервера
- yarn start
http://localhost:3000/graphql

### 2.Полезные команды

Типы миграций с Prisma:

Создание миграции:
- npx prisma migrate dev --name <migration_name>

Применение миграций:
- npx prisma migrate dev

Сброс базы данных (удаляет все данные):
- npx prisma migrate reset

Генерация клиента Prisma:
- npx prisma generate

Запуск Prisma Studio (интерфейс для работы с данными):
- npx prisma studio


Пример желаемой структуры:
/src
    /modules         # Все модули приложения
        /user          # Модуль для работы с пользователями
            /dto         # Data Transfer Objects (DTO) для запросов и ответов
            /entities    # Сущности Prisma (или модели)
            /services    # Логика бизнес-уровня
            /controllers # Обработчики GraphQL запросов
            /resolver    # GraphQL резолверы
            /repositories # Работа с данными (например, Prisma)
        /auth          # Модуль авторизации
        /tasks         # Модуль для задач
    /prisma          # Prisma конфигурация
        prisma.schema  # Схема базы данных Prisma
        migrations/    # Миграции
    /common          # Общие модули (например, фильтры, пайпы, интерсепторы)
    /config          # Конфигурации приложения (например, для окружений)
    /utils           # Утилиты (например, логирование, хелперы)
    main.ts          # Точка входа в приложение
