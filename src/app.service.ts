import { Injectable } from '@nestjs/common';
import { IMessage, IReceive, IDelete } from './interfaces/message';
import { SQSHelper } from './helpers/sqs';

require('dotenv').config();

@Injectable()
export class AppService {
  sqs = new SQSHelper();
  async listQueues() {
    return await this.sqs.listQueues();
  }

  async receiveMessages(receiveParams: IReceive) {
    return await this.sqs.receiveMessages(receiveParams);
  }

  async sendMessage(message: IMessage) {
    try {
      return await this.sqs.sendMessage(message);
    } catch (err) {
      return err;
    }
  }

  async deleteMessage(deleteParams: IDelete) {
    try {
      return await this.sqs.deleteMessage(deleteParams);
    } catch (err) {
      return err;
    }
  }
}
