import { IsOptional, IsString, ValidateIf } from "class-validator";

export class IUpdateNoteDto {
  @IsString()
  @ValidateIf((obj, value) => value !== undefined)
  title?: string;


  @IsString()
  @ValidateIf((obj, value) => value !== undefined)
  content?: string;
}
