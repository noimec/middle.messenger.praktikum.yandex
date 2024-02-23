import Chat from "../../components/Chat";
import Dialog from "../../components/Dialog";
import Sender from "../../components/Sender";

export default class ChatPage {
    private chatInstance: Chat;
    private senderInstance: Sender;
    private dialogInstance: Dialog;

    constructor() {
        this.dialogInstance = new Dialog('section', {
            dates: [
                {
                    date: "19 июля",
                    items: [
                        {
                            sender: "sender",
                            text: `
                        Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент
                        попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что
                        астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на
                        поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.

                        Хассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так
                        никогда
                        и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000
                        евро.
                `,
                            time: "11:56"
                        },
                        {
                            img: true,
                            time: "10:11"
                        },
                        {
                            own: "own",
                            text: `
                        Круто
                `,
                            time: "14:22"
                        },
                    ],
                },
            ],
            attr: {
                class: "chat__window flex"
            }
        })

        this.senderInstance = new Sender('ul', {
            items: [
                { name: "Андрей", sender_message: "Изображение", date: "10:49", message_count: "1" },
                { name: "Илья", sender_message: "И Human Interface Guidelines и Material Design рекомендуют...", date: "11:59", message_count: "3" },
                { name: "Киноклуб", sender_message: "В 2008 году художник Jon Rafman  начал собирать", date: "13:29", message_count: "2" },
                { name: "Вадим", sender_message: "Круто!", date: "12:35", message_count: "6" },
                { name: "Day.", sender_message: "Миллионы россиян ежедневно проводят десятки часов свое", date: "16:20", message_count: "10" }
            ],
            attr: {
                class: "sidebar__list flex reset-list"
            }
        })

        this.chatInstance = new Chat('main', {
            sender: this.senderInstance,
            dialog: this.dialogInstance,
            attr: {
                class: "main flex"
            }
        });
    }

    getContent() {
        return this.chatInstance.getContent();
    }
}