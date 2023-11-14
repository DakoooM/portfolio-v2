// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Resend } from 'resend';

const resend = new Resend('re_JSHtW2EM_9XdGgdLRpQFWUdAbd4PLxzHt');

export default function handler(req, res) {
  res.status(200).json({ name: 'John Doe' })

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'cassinisgiovani@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
  });
}
