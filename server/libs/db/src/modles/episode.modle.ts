import {prop, modelOptions} from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'

@modelOptions({
    schemaOptions: {
        timestamps: true,
        //toJSON:true
    }
})
export default class Episode {

    @ApiProperty({description: '课时名称'})
    @prop()
    name: string

    @ApiProperty({description: '文件'})
    @prop()
    file: string

};