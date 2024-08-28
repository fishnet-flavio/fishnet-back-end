import { Body, Controller, Get, Param, Post, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./dto/create-product.dto";
import { AuthGuard } from "src/auth/guard/auth.guard";
import { Public } from "src/auth/decorator/public.decorator";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("product")
export class ProductController {
    constructor(private readonly productService : ProductService) {}
    
    @Public()
    @Post()
    @UseInterceptors(FileInterceptor("image"))
    async create(@UploadedFile() file, @Body() product : CreateProductDTO) {
        if (file) {
            const imageBuffer = file.buffer;
            return await this.productService.create({...product, image:imageBuffer});
        } else {
            return await this.productService.create(product);
        }
        
    }

    @Public()
    @Get()
    async getAll() {
        return await this.productService.getAll();
    }

    @Public()
    @Get("/:id")
    async getOneById(@Param("id") id: number) {
        return await this.productService.getOneById(id);
    }

    @Public()
    @Get("/user/:id")
    async getAllFromUser(@Param("id") id: number) {
        return await this.productService.getAllFromUser(id);
    }
}
