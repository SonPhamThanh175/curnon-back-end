import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryService } from './service/category.service';
import { CreateCategoryDto } from './dto/CreateCategory.dto';

@Controller('categories')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Post('')
  createCategory(@Body() createCategoryDto: CreateCategoryDto) {
    return this.categoryService.createCategory(createCategoryDto);
  }

  @Get('')
  getAllCategory() {
    return this.categoryService.getAllCategory();
  }

  @Get(':gender')
  getCategoryByGender(@Param('gender') gender: string) {
    return this.categoryService.getCategoryByGender(gender);
  }

  @Delete(':categoryId')
  deleteCategory(@Param('categoryId') categoryId: string) {
    return this.categoryService.deleteCategory(categoryId);
  }

  @Put(':categoryId')
  updateCategory(
    @Param('categoryId') categoryId: string,
    @Body() createCategoryDto: CreateCategoryDto,
  ) {
    return this.categoryService.updateCategory(categoryId, createCategoryDto);
  }
}
