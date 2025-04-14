import { Injectable, NotFoundException } from "@nestjs/common";
import { INoteDto } from './dto/INote.dto';
import { IUpdateNoteDto } from "./dto/IUpdateNote.dto";
import { ICreateNoteDto } from "./dto/ICreateNote.dto";
import { INoteListDto } from "./dto/INoteList.dto";

@Injectable()
export class NotesService {
  notes: INoteDto[] = [];
  idSequence = 0;

  create(createNoteDto: ICreateNoteDto) {
    const newNote: INoteDto = {
      id: String(this.idSequence++),
      title: createNoteDto.title,
      content: createNoteDto.content ?? ''
    }

    this.notes.push(newNote);

    return newNote;
  }

  findAll(): INoteListDto {
    return {
      items: this.notes
    };
  }

  findOne(id: string): INoteDto {
    const note = this.notes.find((note) => note.id === id);
    if (!note) throw new NotFoundException("Note not found");

    return note;
  }

  update(id: string, updateNoteDto: IUpdateNoteDto): INoteDto {
    const note = this.findOne(id);
    Object.assign(note, updateNoteDto);

    return note;
  }

  remove(id: string): {success: boolean} {
    const note = this.findOne(id);
    this.notes = this.notes.filter((note) => note.id !== id);

    return {success: true};
  }
}
