import Chat from "../../components/Chat";
import Dialog from "../../components/Dialog";
import Message from "../../components/Message";
import Sender from "../../components/Sender";

export default class ChatPage {
    private chatInstance: Chat;
    private senderArray: Sender[];
    private dialogData: Dialog[];

    constructor() {
        this.dialogData = [
            new Dialog('div', {
                date: '19 июля',
                messages: [
                    new Message('div', {
                        sender: 'sender',
                        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                                попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                                астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                                поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
        
                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так
                                никогда
                                и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                                евро.`,
                        time: '11:52',
                    }),
                    new Message('div', {
                        img: 'img',
                        time: '10:04',
                    }),
                    new Message('div', {
                        own: 'own',
                        text: 'Круто',
                        time: '12:44'
                    }),
                ]
            }),
            new Dialog('div', {
                date: '20 июля',
                messages: [
                    new Message('div', {
                        sender: 'sender',
                        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                                попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                                астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                                поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой..`,
                        time: '12:42',
                    }),
                    new Message('div', {
                        img: 'img',
                        time: '10:04',
                    }),
                    new Message('div', {
                        own: 'own',
                        text: 'Круто',
                        time: '12:44'
                    }),
                ]
            }),
            new Dialog('div', {
                date: '19 июля',
                messages: [
                    new Message('div', {
                        sender: 'sender',
                        text: `Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                                попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                                астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                                поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.
        
                                Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так
                                никогда
                                и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                                евро.`,
                        time: '11:52',
                    }),
                    new Message('div', {
                        img: 'img',
                        time: '10:04',
                    }),
                    new Message('div', {
                        own: 'own',
                        text: 'Круто',
                        time: '12:44'
                    }),
                ]
            })
        ]

        this.senderArray = [
            new Sender('li', { name: "Андрей", sender_message: "Изображение", date: "10:49", message_count: "1", attr: { class: "sidebar__item" } }),
            new Sender('li', { name: "Илья", sender_message: "И Human Interface Guidelines и Material Design рекомендуют...", date: "11:59", message_count: "3", attr: { class: "sidebar__item" } }),
            new Sender('li', { name: "Киноклуб", sender_message: "В 2008 году художник Jon Rafman  начал собирать", date: "13:29", message_count: "2", attr: { class: "sidebar__item" } }),
            new Sender('li', { name: "Day.", sender_message: "Миллионы россиян ежедневно проводят десятки часов свое", date: "16:20", message_count: "10", attr: { class: "sidebar__item" } }),
        ]

        this.chatInstance = new Chat('main', {
            senders: this.senderArray,
            dialog: this.dialogData,
            attr: {
                class: "main flex"
            }
        });
    }

    getContent() {
        return this.chatInstance.getContent();
    }
}