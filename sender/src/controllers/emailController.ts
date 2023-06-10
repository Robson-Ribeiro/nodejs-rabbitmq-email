import RabbitmqServer from '../rabbitmq-server';

type emailController = {
  publish(req, res, next): any;
};


class EmailController implements emailController {
  async publish(req: any, res: any, next: any): Promise<any>{
    if(typeof req.body != 'object' ) return res.status(400).send('Invalid credentials!');
    const server = new RabbitmqServer('amqp://admin:admin@rabbitmq:5672');
    await server.start();
    //await server.publishInQueue('emails', JSON.stringify(req.body));
    await server.publishInExchange('amq.direct', 'rota', JSON.stringify(req.body));
    return res.send(req.body);
  }
}

export default new EmailController();