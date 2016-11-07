import {
    assert
} from 'chai'

import TelegramController from '../lib/ctrl/telegram_ctrl.js'


describe('Telegram Test', () => {
    it("should return 'Not authorized'", () => {
        return new Promise(TelegramController.bind({
                req: {
                    url: "http://localhost:5093/telegram"

                }
            }))
            .catch((e) => {
                assert.equal("Not authorized", e.message)
            })
    })

    it("should return status 200", () => {
        return new Promise(TelegramController.bind({
                req: {
                    url: "http://localhost:5093/telegram?TELEGRAM_ID=VFEl7aLP7o",
                    body: {
                        update_id: 615394434,
                        message: {
                            message_id: 5,
                            from: {
                                id: 12875734,
                                first_name: 'Xavi',
                                last_name: 'Serrano'
                            },
                            chat: {
                                id: 12875734,
                                first_name: 'Xavi',
                                last_name: 'Serrano',
                                type: 'private'
                            },
                            date: 1478541574,
                            text: 'hey'
                        }
                    }
                }
            }))
            .then((res)=>{
                assert.equal(200, res.status)
                assert.equal(true, res.body.ok)
                })
            .catch((e) => {
                console.log(e);
            })
    })

});