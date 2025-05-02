import { Router } from 'express';
import { createApplication } from './application.service';
import { bot } from '../../server';
import config from '../../config/config';

const router = Router();

router.post('/', function(request, response) {
    response.json(createApplication(request.body));

    bot.api.sendMessage(config.adminId, 
        `<b>Поступила новая заявка от ${request.body.fio}</b>\n\nE-mail: ${request.body.email}\nТелефон: ${request.body.phone}\nТип проекта: ${request.body.type}`, 
    {
        parse_mode: "HTML"
    });
});

export default router;