import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { Client } from '@elastic/elasticsearch';

@Injectable()
export class ElasticsearchService {
  private readonly client: Client;

  constructor() {
    this.client = new Client({ node: 'http://localhost:9200' }); // Thay đổi URL nếu cần
  }

  async search(index: string, query: any): Promise<any> {
    try {
      const response = await this.client.search({
        index,
        body: query,
      });

      // Truy cập kết quả tìm kiếm qua `response.hits.hits`
      return response.hits.hits;
    } catch (error) {
      throw new HttpException(
        'Elasticsearch search error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
