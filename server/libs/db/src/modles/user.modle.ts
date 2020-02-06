import {prop} from '@typegoose/typegoose'

export default class User{

    @prop()
    username:string

    @prop()
    password:string

};