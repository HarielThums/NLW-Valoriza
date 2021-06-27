import { EntityRepository, Repository } from "typeorm";
import { Compliments } from "../models/Compliment";

@EntityRepository(Compliments)
export class ComplimentsRepositories extends Repository<Compliments> {}
