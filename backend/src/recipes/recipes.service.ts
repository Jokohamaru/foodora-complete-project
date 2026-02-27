import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { title } from 'process';

@Injectable()
export class RecipesService {
    private recipes = [
        {
            id: 1,
            title: 'Đậu phụ sốt cà',
            description: 'Món chay quốc dân',
        },
        {
            id: 2,
            title: 'Trứng rán',
            description: 'Món cơm',
        },
    ];

    create(createRecipeDto: CreateRecipeDto) {
        const newRecipe = {
            id: Math.floor(Math.random() * 1000),
            ...createRecipeDto,
            createAt: new Date(),
        };

        this.recipes.push(newRecipe);

        return 'This action adds a new recipe';
    }

    findAll() {
        return this.recipes;
    }

    findOne(id: number) {
        return this.recipes.find((recipe) => recipe.id === id);
    }

    search(keyword: string) {
        const results = this.recipes.filter((recipe) => {
            return recipe.title.includes(keyword);
        });

        return results;
    }

    update(id: number, updateRecipeDto: UpdateRecipeDto) {
        return `This action updates a #${id} recipe`;
    }

    remove(targetId: number): string {
        const targetIndex: number = this.recipes.findIndex((recipe) => {
            return recipe.id === targetId;
        });

        if (targetIndex === -1) {
            return `The #${targetId} recipe is not exist`;
        }

        this.recipes.splice(targetIndex, 1);
        return `This action removes a #${targetId} recipe`;
    }
}
