import { v4 as uuidv4 } from "uuid";
import { Board, ColumnAllTypes } from "./dataTypes";

export const board: Board = [
    {
        id: uuidv4(),
        type: "base",
        column_title: "Беклог",
        // img: Base,
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
        // img: BlueButtonPlay,
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
        // img: Completed,
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
    // {
    //     id: uuidv4(),
    //     type: "passed",
    //     column_title: "Сдана",
    //     // img: Passed,
    //     tasks: [
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Временной промежуток при фильтрации",
    //         },
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Статистика по икочникам звонка",
    //         },
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Добавить график к статистике пользователей (количества регистраций)",
    //         },
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Создать тестовую сборку сервиса ( для обработки нововведений )",
    //         },
    //     ],
    // },
    // {
    //     id: uuidv4(),
    //     type: "cancelled",
    //     column_title: "Отмененные",
    //     // img: "",
    //     tasks: [
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Текст отмененной задачи",
    //         },
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Текст отмененной задачи",
    //         },
    //     ],
    // },
    // {
    //     id: uuidv4(),
    //     type: "waiting",
    //     column_title: "На рассмотрении",
    //     // img: "",
    //     tasks: [
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Текст рассматриваемой задачи",
    //         },
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Текст рассматриваемой задачи",
    //         },
    //     ],
    // },
    // {
    //     id: uuidv4(),
    //     type: "modification",
    //     column_title: "Доработка",
    //     // img: "",
    //     tasks: [
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Текст исправляемой задачи",
    //         },
    //         {
    //             id: uuidv4(),
    //             number: `#${20413}`,
    //             title: "Текст исправляемой задачи",
    //         },
    //     ],
    // },
];

export const columnTypes: ColumnAllTypes = [
    // "base",
    // "works",
    // "completed",
    // "passed",
    // "cancelled",
    // "waiting",
    // "modification",
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
