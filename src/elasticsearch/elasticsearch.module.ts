import { Module } from '@nestjs/common';
import { ElasticsearchModule as NestElasticsearchModule } from '@nestjs/elasticsearch';
import { ElasticsearchService } from './elasticsearch.service';

@Module({
  imports: [
    NestElasticsearchModule.register({
      node: 'http://localhost:9200', // Địa chỉ của Elasticsearch
      // Optional: cấu hình thêm nếu cần
    }),
  ],
  providers: [ElasticsearchService],
  exports: [ElasticsearchService],
})
export class ElasticsearchModule {}
