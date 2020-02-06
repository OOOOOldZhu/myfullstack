import {Controller} from '@nestjs/common';
import {Crud} from "nestjs-mongoose-crud";
import User from "@libs/db/modles/user.modle";
import {InjectModel} from "nestjs-typegoose";

@Crud({model: User})
@Controller('users')
export class UsersController {
    constructor(@InjectModel(User) private readonly model) {

    }
}
