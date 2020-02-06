import {Module} from '@nestjs/common';
import {DbService} from './db.service';
import {TypegooseModule} from 'nestjs-typegoose';
console.log('数据库连接module........')
@Module({
    imports: [TypegooseModule.forRoot('mongodb://localhost/topfullstack', {
        useNewUrlParser:true,
        useUnifiedTopology:true,
        useCreateIndex:true,
        useFindAndModify:false
    }),
    ],
    providers: [DbService],
    exports: [DbService],
})
export class DbModule {
}
