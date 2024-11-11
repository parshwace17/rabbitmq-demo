const amqp = require('amqplib');

async function receiveMessages() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  // Declare the same exchange
  const exchange = 'logs';
  await channel.assertExchange(exchange, 'direct', { durable: true });

  // Declare a queue
  const queue = 'logQueue';
  await channel.assertQueue(queue, { durable: true });

  // Bind the queue to the exchange with a routing key (info in this case)
  await channel.bindQueue(queue, exchange, 'info');

  console.log(`Waiting for messages in ${queue}. To exit press CTRL+C`);

  // Consume messages from the queue
  channel.consume(queue, (msg) => {
    if (msg !== null) {
      console.log(`Received message: ${msg.content.toString()}`);
      channel.ack(msg); // Acknowledge that the message was processed
    }
  });
}

receiveMessages().catch(console.error);
