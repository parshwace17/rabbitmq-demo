const amqp = require('amqplib');

async function sendMessage() {
  const connection = await amqp.connect('amqp://localhost');
  const channel = await connection.createChannel();

  // Declare an exchange of type 'direct'
  const exchange = 'logs';
  await channel.assertExchange(exchange, 'direct', { durable: true });

  // Send a message with a routing key
  const msg = 'Hello, RabbitMQ!';
  const routingKey = 'info'; // You can change the routing key to test different consumers
  channel.publish(exchange, routingKey, Buffer.from(msg));

  console.log(`Sent message: ${msg}`);

  // Close the channel and connection
  setTimeout(() => {
    channel.close();
    connection.close();
  }, 500);
}

sendMessage().catch(console.error);
