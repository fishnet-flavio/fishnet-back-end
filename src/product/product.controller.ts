import { Body, Controller, Get, Param, Post, Res, UploadedFile, UseGuards, UseInterceptors } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDTO } from "./dto/create-product.dto";
import { AuthGuard } from "src/auth/guard/auth.guard";
import { Public } from "src/auth/decorator/public.decorator";
import { FileInterceptor } from "@nestjs/platform-express";
import { Response } from "express";

@Controller("product")
export class ProductController {
    constructor(private readonly productService : ProductService) {}
    
    @Public()
    @Post()
    @UseInterceptors(FileInterceptor("image"))
    async create(@Body() body: any, @UploadedFile() file) {
        const { price, name, stock, description, vendorId } = body;
        const product : CreateProductDTO = {
            price: parseFloat(price),
            name,
            stock: Number(stock),
            description,
            image: file?.buffer,
            vendorId: Number(vendorId)
        };

        return await this.productService.create(product);
    }

    @Public()
    @Get("/:id/image")
    async getProfilePicture(@Param('id') id: number, @Res() res: Response) {
        const product = await this.productService.getOneById(id);
        if (product.image) {
            res.set('Content-Type', 'image/jpeg');
            res.send(product.image);
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
