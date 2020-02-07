import {Global, Module} from '@nestjs/common';
import {DbService} from './db.service';
import {TypegooseModule} from 'nestjs-typegoose';
import User from "@libs/db/modles/user.modle";
import Course from "@libs/db/modles/course.modle";
import Episode from "@libs/db/modles/episode.modle";

console.log('数据库连接module........')

const modles = TypegooseModule.forFeature([User, Course, Episode])

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
