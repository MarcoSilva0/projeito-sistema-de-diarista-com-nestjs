import { Module } from '@nestjs/common';
import { DiaristaModule } from './diarista/diarista.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Diarista } from './diarista/diarista.entity';

@Module({
  imports: [
    DiaristaModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3307,
      username: 'root',
      password: '123456a',
      database: 'curso-nestjs',
      entities: [Diarista],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
