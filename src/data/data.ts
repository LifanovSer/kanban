import { v4 as uuidv4 } from "uuid";
import { Board, ColumnAllTypes } from ".";

export const board: Board = [
    {
        id: uuidv4(),
        type: "base",
        column_title: "Беклог",
        tasks: [
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Интерфейс динамики кадров на предприятии",
            },
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Ежемесячный отчёт для куратора",
            },
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Статистика по заявкам",
            },
        ],
    },
    {
        id: uuidv4(),
        type: "works",
        column_title: "В работе",
        tasks: [
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Заявки сгруппировать по заявкам",
            },
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Ограничения по безопасности",
            },
        ],
    },
    {
        id: uuidv4(),
        type: "completed",
        column_title: "Выполнена",
        tasks: [
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Проживание: новое поле для тех кто работает",
            },
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Рейтинг мастеров в интерфейсе мереджера",
            },
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Перенос данных в конце месяца",
            },
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Доработки по интерфейсу «Плана»",
            },
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Подвешенная заявка",
            },
            {
                id: uuidv4(),
                number: `#${20413}`,
                title: "Интерфейс динамики кадров на предприятии",
            },
        ],
    },
];

export const columnTypes: ColumnAllTypes = [
    {
        id: uuidv4(),
        type: "base",
        column_title: "Беклог",
    },
    {
        id: uuidv4(),
        type: "works",
        column_title: "В работе",
    },
    {
        id: uuidv4(),
        type: "completed",
        column_title: "Выполнена",
    },
    {
        id: uuidv4(),
        type: "passed",
        column_title: "Сдана",
    },
    {
        id: uuidv4(),
        type: "cancelled",
        column_title: "Отмененные",
    },
    {
        id: uuidv4(),
        type: "waiting",
        column_title: "На рассмотрении",
    },
    {
        id: uuidv4(),
        type: "modification",
        column_title: "Доработка",
    },
];
