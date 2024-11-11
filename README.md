
# Simple RabbitMQ Demo with Node.js

This is a simple Node.js application demonstrating the use of **RabbitMQ** as a message broker. The application contains two main components:

1. **Producer**: Sends messages to a RabbitMQ queue.
2. **Consumer**: Listens to the queue, processes messages, and acknowledges them.

## Prerequisites

Before running this demo, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [RabbitMQ](https://www.rabbitmq.com/) (or a running RabbitMQ instance)

You can run RabbitMQ locally using Docker by running the following command:

```bash
docker run -d --name rabbitmq -p 5672:5672 -p 15672:15672 rabbitmq:management
```

This will start RabbitMQ with the default credentials:
- **Username**: `guest`
- **Password**: `guest`

Alternatively, you can use a managed RabbitMQ service or host RabbitMQ on a different server.

## Installation

1. Clone the repository or download the demo files.

2. Navigate to the project folder and install the required dependencies:

```bash
npm install
```

3. Make sure RabbitMQ is running and accessible (either locally or on a remote server).

## Running the Demo

The demo contains two components:

1. **Producer**: Sends messages to a queue.
2. **Consumer**: Listens for and processes messages from the queue.

### Start the Consumer

In one terminal window, run the consumer:

```bash
node consumer.js
```

This will start the consumer, which will listen for messages from the queue.

### Start the Producer

In another terminal window, run the producer:

```bash
node producer.js
```

This will send a message to the RabbitMQ queue, which the consumer will process.

### Expected Output

When you run the consumer, you should see the following output:

```bash
Waiting for messages in tasks. To exit press CTRL+C
Received message: Hello, RabbitMQ!
```

When you run the producer, you should see the following output:

```bash
Sent: Hello, RabbitMQ!
```

### Stopping the Demo

To stop the demo, simply press `CTRL+C` in both the producer and consumer terminals.

## Code Structure

- **consumer.js**: Contains the code for consuming messages from RabbitMQ and processing them.
- **producer.js**: Contains the code for sending messages to RabbitMQ.

## Troubleshooting

- **Unable to connect to RabbitMQ**: Ensure RabbitMQ is running and accessible. You can check RabbitMQ’s management interface at `http://localhost:15672/` using the default credentials (`guest`/`guest`).
- **Queue not found**: Ensure that the queue is correctly declared in both the producer and consumer. You can verify the queue in RabbitMQ's management interface.

## Next Steps

- Explore using **multiple consumers** to process messages in parallel.
- Implement **message retries** or **dead-letter queues** to handle failures.
- Explore using **exchanges** and **routing keys** to route messages to specific queues.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
