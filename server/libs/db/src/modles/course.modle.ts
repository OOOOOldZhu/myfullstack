import {prop, modelOptions, arrayProp, Ref} from '@typegoose/typegoose'
import {ApiProperty} from '@nestjs/swagger'
import Episode from './episode.modle'
@modelOptions({
    schemaOptions: {
        timestamps: true,
        //toJSON:true
    }
})
export default class Course {

    @ApiProperty({description: '课程名称'})
    @prop()
    name: string

    @ApiProperty({description: '封面'})
    @prop()
    cover: string

    //@ApiProperty({description: '课时'})
    // {itemsRef:Episode} itemsRef后面如果是object类型会出现循环引用的问题，所以最好使用字符串类型
    @arrayProp({itemsRef:'Episode'}) //itemsRef是给mongoose用的
    episodes: Ref<Episode>[]
    //TS中的参考Ref，但是必须定义泛型。这个数组字段参考的是Episode

};