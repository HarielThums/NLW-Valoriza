import { getCustomRepository } from 'typeorm';
import { TagsRepositories } from '../repositories/TagsRepositories';

export class CreateTagService {
	async execute(name: string) {
		const tagsRepositories = getCustomRepository(TagsRepositories);

		if (!name) throw new Error('Incorrect name');

		const tagAlreadyExists = await tagsRepositories.findOne({ name });

		if (tagAlreadyExists) throw new Error('This tag already exists. Please try another.');

		const tag = await tagsRepositories.create({ name });

		await tagsRepositories.save(tag);

		return tag;
	}
}
