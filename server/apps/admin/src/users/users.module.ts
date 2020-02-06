import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import {InjectModel} from "nestjs-typegoose";
import User from "@libs/db/modles/user.modle";
import {Crud} from 'nestjs-mongoose-crud';

@Crud({model:User})
@Module({
  controllers: [UsersController]
})
export class UsersModule {
  constructor(@InjectModel(User) private readonly model){

  }
}
