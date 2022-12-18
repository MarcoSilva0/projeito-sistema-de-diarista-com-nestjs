import { Controller, Get, Param, Render } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Diarista } from './diarista.entity';

@Controller('diaristas')
export class DiaristaController {
  constructor(
    @InjectRepository(Diarista)
    private diaristaRepository: Repository<Diarista>,
  ) {}
  @Get()
  @Render('listar_diarista')
  async listarDiarista() {
    return { diarista: await this.diaristaRepository.find() };
  }
}
