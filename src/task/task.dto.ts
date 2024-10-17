import { IsString } from 'class-validator';

export class TaskDto {
  @IsString()
  name: string;
}
