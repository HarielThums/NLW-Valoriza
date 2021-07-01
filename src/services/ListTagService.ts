import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';
import { classToPlain } from 'class-transformer';

export class ListTagsService {
	async execute() {
		const tagRepositories = getCustomRepository(TagsRepositories);

		const tags = await tagRepositories.find();

		return classToPlain(tags); // adicionando nameCustom ao objeto que será retornado.
	}
}
