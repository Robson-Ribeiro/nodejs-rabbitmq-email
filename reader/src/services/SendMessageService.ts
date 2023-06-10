import { SES } from 'aws-sdk';

class SendMessageService {
    private client: SES;

    constructor() {
        this.client = new SES();
    }
    
    async run(email): Promise<void> {
        await this.client
            .sendEmail({
                Source: `${email.source}`,
                Destination: {
                    ToAddresses: [
                        `${email.destination}`
                    ],
                },
                Message: {
                    Subject: {
                        Data: `${email.subject}`,
                    },
                    Body: {
                        Text: {
                            Data: `${email.text}`,
                        },
                    }
                }
            }).promise();
    }
}

export default SendMessageService;