import {Global, Module} from '@nestjs/common';
import {DbService} from './db.service';
import {TypegooseModule} from 'nestjs-typegoose';
import User from "@libs/db/modles/user.modle";

console.log('数据库连接module........')

const modles = TypegooseModule.forFeature([User])

@Global()
@Module({
    imports: [TypegooseModule.forRoot('mongodb://localhost/topfullstack', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }),
        modles
    ],
    providers: [DbService],
    exports: [DbService, modles],
})
export class DbModule {
}
