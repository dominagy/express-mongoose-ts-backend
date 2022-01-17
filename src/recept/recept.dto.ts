import { IsArray, IsString } from "class-validator";

export default class CreateReceptDto {
    @IsString()
    public url: string;

    @IsString()
    public receptNév: string;

    @IsString()
    public leírás: string;

    @IsArray()
    public hozzávalók: string[];
}
