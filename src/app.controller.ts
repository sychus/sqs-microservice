import { Body, Controller, Get, Post, Delete } from '@nestjs/common';
import { AppService } from './app.service';
import { IMessage, IReceive, IDelete } from './interfaces/message';

@Controller('sqs')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async listQueues() {
    return await this.appService.listQueues();
  }

  @Post('receive')
  listMessagesByQueued(@Body() receiveDTO) {
    const params: IReceive = {
      QueueUrl: receiveDTO.url,
      MaxNumberOfMessages: receiveDTO.amount,
    };
    return this.appService.receiveMessages(params);
  }

  @Post('send')
  sendMessage(@Body() messageDTO) {
    const message: IMessage = {
      QueueUrl: messageDTO.url,
      MessageBody: messageDTO.message,
      MessageDeduplicationId: '111', // random value
      MessageGroupId: messageDTO.organizationId,
    };
    return this.appService.sendMessage(message);
  }

  @Delete()
  deleteMessage(@Body() messageDTO) {
    const deleteMessage: IDelete = {
      QueueUrl: messageDTO.url,
      ReceiptHandle: messageDTO.message,
    };
    return this.appService.deleteMessage(deleteMessage);
  }
}
