import {Controller, Post, Req} from '@nestjs/common';
import {Crud} from "nestjs-mongoose-crud";
import Course from "@libs/db/modles/course.modle";
import {InjectModel} from "nestjs-typegoose";
import {ApiTags} from '@nestjs/swagger'
console.log('1，局部作用域')
@Crud({
    model: Course
})
@ApiTags('课程')
@Controller('courses')
export class CoursesController {
    constructor(@InjectModel(Course) private readonly model) {
        console.log('2，构造函数')
    }

    // @Post()
    // getReq(@Req() req){
    //     console.log('3,req = ',req)
    // }

}
