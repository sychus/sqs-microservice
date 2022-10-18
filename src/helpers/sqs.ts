import {
  GetQueueAttributesCommand,
  ListQueuesCommand,
  SendMessageCommand,
  SQSClient,
  SendMessageCommandInput,
  ReceiveMessageCommand,
  DeleteMessageCommand,
} from '@aws-sdk/client-sqs';

export class SQSHelper {
  client;
  constructor() {
    this.client = new SQSClient({});
  }

  listQueues() {
    return this.client.send(new ListQueuesCommand({}));
  }

  getQueueAttributes(params: any) {
    return this.client.send(new GetQueueAttributesCommand(params));
  }

  receiveMessages(params) {
    return this.client.send(new ReceiveMessageCommand(params));
  }

  sendMessage(params: SendMessageCommandInput) {
    return this.client.send(new SendMessageCommand(params));
  }

  deleteMessage(params: any) {
    return this.client.send(new DeleteMessageCommand(params));
  }
}
