// src/utils/sendMail.js

import nodemailer from 'nodemailer';

import { SMTP } from '../constants/index.js';
import { getEnvVar } from '../utils/getEnvVar.js';

let transporter;

const initTransporter = () => {
  if (!transporter) {
    transporter = nodemailer.createTransport({
      host: getEnvVar(SMTP.SMTP_HOST),
      port: Number(getEnvVar(SMTP.SMTP_PORT)),
      auth: {
        user: getEnvVar(SMTP.SMTP_USER),
        pass: getEnvVar(SMTP.SMTP_PASSWORD),
      },
    });
  }
  return transporter;
};

export const sendEmail = async (options) => {
  const mailer = initTransporter();
  return await mailer.sendMail(options);
};
