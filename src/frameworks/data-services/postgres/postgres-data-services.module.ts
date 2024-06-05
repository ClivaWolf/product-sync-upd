import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { IDataServices } from '../../../core';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule],
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST'),
                port: configService.get('DB_PORT'),
                username: configService.get('DB_USER'),
                password: configService.get('DB_PASSWORD'),
                database: configService.get('DB_NAME'),
                autoLoadEntities: true,
                synchronize: true,
                //src\core\entities\user.ts
                entities: [__dirname + '/**/*.entity{.ts,.js}'],
            }),
            inject: [ConfigService],
        }), 
    ],
    providers: [
        {
            provide: IDataServices,
            useClass: PostgresDataServicesModule
        }
    ],
    exports: [
        IDataServices
    ]
})
export class PostgresDataServicesModule { }