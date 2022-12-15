import { Controller, Get } from '@nestjs/common';

@Controller('diarista')
export class DiaristaController {
  @Get()
  root() {
    return 'Exemplo de rota GET';
  }
}
