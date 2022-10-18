export interface IMessage {
  QueueUrl: string;
  MessageBody: string;
  MessageDeduplicationId: string;
  MessageGroupId: string;
}

export interface IReceive {
  QueueUrl: string;
  MaxNumberOfMessages: number;
}

export interface IDelete {
  QueueUrl: string;
  ReceiptHandle: string;
}
