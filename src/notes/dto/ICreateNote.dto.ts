import { IsNotEmpty, IsOptional, IsString, ValidateIf } from "class-validator";

export class ICreateNoteDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @ValidateIf((obj, value) => value !== undefined)
  content?: string;
}
