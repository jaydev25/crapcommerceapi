/*
 * spurtcommerce API
 * version 2.2
 * http://api.spurtcommerce.com
 *
 * Copyright (c) 2019 piccosoft ltd
 * Author piccosoft ltd <support@piccosoft.com>
 * Licensed under the MIT license.
 */
import ejs from 'ejs';
// import nodemailer from 'nodemailer';
// import smtpTransport from 'nodemailer-smtp-transport';
import {mail} from '../env';

export class MAILService {
   // for add customer API
    public static customerLoginMail(emailContent: any, email: any, Subject: any): Promise<any> {
        const productDetailData = undefined;
        return new Promise((resolve, reject) => {
            // const transporter = nodemailer.createTransport(smtpTransport({
            //     host: mail.HOST,
            //     port: mail.PORT,
            //     secure: mail.SECURE,
            //     auth: {
            //         user: mail.AUTH.user,
            //         pass: mail.AUTH.pass,
            //     },
            // }));
            ejs.renderFile('./views/emailTemplate.ejs', {emailContent , productDetailData}, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    // const mailOptions = {
                    //     from: mail.FROM,
                    //     to: email,
                    //     subject: Subject,
                    //     html: data,
                    // };
                    // transporter.sendMail(mailOptions, (error, info) => {
                    //     if (error) {
                    //         reject(error);
                    //         console.log(error);
                    //     } else {
                    //         console.log('Email sent: ' + info.response);
                    //         resolve(info);
                    //     }
                    // });
                    const send = require('gmail-send')({
                      // var send = require('../index.js')({
                      user: mail.ADMIN_EMAIL,
                      // user: credentials.user,                  // Your GMail account used to send emails
                      pass: mail.ADMIN_EMAIL_KEY,
                      // pass: credentials.pass,                  // Application-specific password
                      to: email,
                      // to:   credentials.user,                  // Send to yourself
                                                               // you also may set array of recipients:
                                                               // [ 'user1@gmail.com', 'user2@gmail.com' ]
                      from: mail.FROM,            // from: by default equals to user
                      // replyTo: credentials.user,            // replyTo: by default undefined
                      // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
                      subject: Subject,
                      // text:    'gmail-send example 1',         // Plain text
                      html: data,
                    });
                    send({ // Overriding default parameters
                      // subject: 'Verify Your Email',         // Override value set as default
                    }, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    //  customer register
    public static registerMail(emailContent: any, email: any, Subject: any): Promise<any> {
        const productDetailData = undefined;
        return new Promise((resolve, reject) => {
            // const transporter = nodemailer.createTransport(smtpTransport({
            //     host: mail.HOST,
            //     port: mail.PORT,
            //     secure: mail.SECURE,
            //     auth: {
            //         user: mail.AUTH.user,
            //         pass: mail.AUTH.pass,
            //     },
            // }));
            ejs.renderFile('./views/emailTemplate.ejs', {emailContent , productDetailData}, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                  // const mailOptions = {
                  //     from: mail.FROM,
                  //     to: email,
                  //     subject: Subject,
                  //     html: data,
                  // };
                  // transporter.sendMail(mailOptions, (error, info) => {
                  //     if (error) {
                  //         reject(error);
                  //         console.log(error);
                  //     } else {
                  //         console.log('Email sent: ' + info.response);
                  //         resolve(info);
                  //     }
                  // });
                  const send = require('gmail-send')({
                    // var send = require('../index.js')({
                    user: mail.ADMIN_EMAIL,
                    // user: credentials.user,                  // Your GMail account used to send emails
                    pass: mail.ADMIN_EMAIL_KEY,
                    // pass: credentials.pass,                  // Application-specific password
                    to: email,
                    // to:   credentials.user,                  // Send to yourself
                                                             // you also may set array of recipients:
                                                             // [ 'user1@gmail.com', 'user2@gmail.com' ]
                    from: mail.FROM,            // from: by default equals to user
                    // replyTo: credentials.user,            // replyTo: by default undefined
                    // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
                    subject: Subject,
                    // text:    'gmail-send example 1',         // Plain text
                    html: data,
                  });
                  send({ // Overriding default parameters
                    // subject: 'Verify Your Email',         // Override value set as default
                  }, (error, info) => {
                      if (error) {
                          reject(error);
                          console.log(error);
                      } else {
                          console.log('Email sent: ' + info);
                          resolve(info);
                      }
                  });
                }
            });
        });
    }
    // forgot password
    public static passwordForgotMail(emailContent: any, email: any, Subject: any): Promise<any> {
        const productDetailData = undefined;
        return new Promise((resolve, reject) => {
            // const transporter = nodemailer.createTransport(smtpTransport({
            //     host: mail.HOST,
            //     port: mail.PORT,
            //     secure: mail.SECURE,
            //     auth: {
            //         user: mail.AUTH.user,
            //         pass: mail.AUTH.pass,
            //     },
            // }));
            ejs.renderFile('./views/emailTemplate.ejs', {emailContent , productDetailData}, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    // const mailOptions = {
                    //     from: mail.FROM,
                    //     to: email,
                    //     subject: Subject,
                    //     html: data,
                    // };
                    // transporter.sendMail(mailOptions, (error, info) => {
                    //     if (error) {
                    //         reject(error);
                    //         console.log(error);
                    //     } else {
                    //         console.log('Email sent: ' + info.response);
                    //         resolve(info);
                    //     }
                    // });
                    const send = require('gmail-send')({
                      // var send = require('../index.js')({
                      user: mail.ADMIN_EMAIL,
                      // user: credentials.user,                  // Your GMail account used to send emails
                      pass: mail.ADMIN_EMAIL_KEY,
                      // pass: credentials.pass,                  // Application-specific password
                      to: email,
                      // to:   credentials.user,                  // Send to yourself
                                                               // you also may set array of recipients:
                                                               // [ 'user1@gmail.com', 'user2@gmail.com' ]
                      from: mail.FROM,            // from: by default equals to user
                      // replyTo: credentials.user,            // replyTo: by default undefined
                      // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
                      subject: Subject,
                      // text:    'gmail-send example 1',         // Plain text
                      html: data,
                    });
                    send({ // Overriding default parameters
                      // subject: 'Verify Your Email',         // Override value set as default
                    }, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // contact Us
    public static contactMail(emailContent: string, Subject: any): Promise<any> {
        const productDetailData = undefined;
        return new Promise((resolve, reject) => {
            // const transporter = nodemailer.createTransport(smtpTransport({
            //     host: mail.HOST,
            //     port: mail.PORT,
            //     secure: mail.SECURE,
            //     auth: {
            //         user: mail.AUTH.user,
            //         pass: mail.AUTH.pass,
            //     },
            // }));
            ejs.renderFile('./views/emailTemplate.ejs', { emailContent, productDetailData }, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    // const mailOptions = {
                    //     to: mail.FROM,
                    //     subject: Subject,
                    //     html: data,
                    // };
                    // transporter.sendMail(mailOptions, (error, info) => {
                    //     if (error) {
                    //         reject(error);
                    //         console.log(error);
                    //     } else {
                    //         console.log('Email sent: ' + info.response);
                    //         resolve(info);
                    //     }
                    // });
                    const send = require('gmail-send')({
                      // var send = require('../index.js')({
                      user: mail.ADMIN_EMAIL,
                      // user: credentials.user,                  // Your GMail account used to send emails
                      pass: mail.ADMIN_EMAIL_KEY,
                      // pass: credentials.pass,                  // Application-specific password
                      to: mail.FROM,
                      // to:   credentials.user,                  // Send to yourself
                                                               // you also may set array of recipients:
                                                               // [ 'user1@gmail.com', 'user2@gmail.com' ]
                      // from: mail.FROM,            // from: by default equals to user
                      // replyTo: credentials.user,            // replyTo: by default undefined
                      // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
                      subject: Subject,
                      // text:    'gmail-send example 1',         // Plain text
                      html: data,
                    });
                    send({ // Overriding default parameters
                      // subject: 'Verify Your Email',         // Override value set as default
                    }, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // admin mail for check out
    public static adminOrderMail(emailContent: any, orderData: any, Subject: any, productDetailData: any, today: any): Promise<any> {
        return new Promise((resolve, reject) => {
            // const transporter = nodemailer.createTransport(smtpTransport({
            //     host: mail.HOST,
            //     port: mail.PORT,
            //     secure: mail.SECURE,
            //     auth: {
            //         user: mail.AUTH.user,
            //         pass: mail.AUTH.pass,
            //     },
            // }));
            ejs.renderFile('./views/emailTemplate.ejs', { emailContent , orderData , productDetailData , today}, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    // const mailOptions = {
                    //     from: orderData.email,
                    //     to: mail.FROM,
                    //     subject: Subject + ' ' + orderData.orderPrefixId,
                    //     html: data,
                    // };
                    // transporter.sendMail(mailOptions, (error, info) => {
                    //     if (error) {
                    //         reject(error);
                    //         console.log(error);
                    //     } else {
                    //         console.log('Email sent: ' + info.response);
                    //         resolve(info);
                    //     }
                    // });
                    const send = require('gmail-send')({
                      // var send = require('../index.js')({
                      user: mail.ADMIN_EMAIL,
                      // user: credentials.user,                  // Your GMail account used to send emails
                      pass: mail.ADMIN_EMAIL_KEY,
                      // pass: credentials.pass,                  // Application-specific password
                      to: mail.FROM,
                      // to:   credentials.user,                  // Send to yourself
                                                               // you also may set array of recipients:
                                                               // [ 'user1@gmail.com', 'user2@gmail.com' ]
                      from: orderData.email,            // from: by default equals to user
                      // replyTo: credentials.user,            // replyTo: by default undefined
                      // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
                      subject: Subject,
                      // text:    'gmail-send example 1',         // Plain text
                      html: data,
                    });
                    send({ // Overriding default parameters
                      // subject: 'Verify Your Email',         // Override value set as default
                    }, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
    // customer mail for check out
    public static customerOrderMail(emailContent: any, orderData: any, Subject: any, productDetailData: any, today: any): Promise<any> {
        return new Promise((resolve, reject) => {
            // const transporter = nodemailer.createTransport(smtpTransport({
            //     host: mail.HOST,
            //     port: mail.PORT,
            //     secure: mail.SECURE,
            //     auth: {
            //         user: mail.AUTH.user,
            //         pass: mail.AUTH.pass,
            //     },
            // }));
            ejs.renderFile('./views/emailTemplate.ejs', { emailContent, orderData , productDetailData, today }, (err, data) => {
                if (err) {
                    console.log(err);
                } else {
                    // const mailOptions = {
                    //     from: mail.FROM,
                    //     to: orderData.email,
                    //     subject: Subject + ' ' + orderData.orderPrefixId,
                    //     html: data,
                    // };
                    // transporter.sendMail(mailOptions, (error, info) => {
                    //     if (error) {
                    //         reject(error);
                    //         console.log(error);
                    //     } else {
                    //         console.log('Email sent: ' + info.response);
                    //         resolve(info);
                    //     }
                    // });
                    const send = require('gmail-send')({
                      // var send = require('../index.js')({
                      user: mail.ADMIN_EMAIL,
                      // user: credentials.user,                  // Your GMail account used to send emails
                      pass: mail.ADMIN_EMAIL_KEY,
                      // pass: credentials.pass,                  // Application-specific password
                      to: orderData.email,
                      // to:   credentials.user,                  // Send to yourself
                                                               // you also may set array of recipients:
                                                               // [ 'user1@gmail.com', 'user2@gmail.com' ]
                      from: mail.FROM,            // from: by default equals to user
                      // replyTo: credentials.user,            // replyTo: by default undefined
                      // bcc: 'some-user@mail.com',            // almost any option of `nodemailer` will be passed to it
                      subject: Subject,
                      // text:    'gmail-send example 1',         // Plain text
                      html: data,
                    });
                    send({ // Overriding default parameters
                      // subject: 'Verify Your Email',         // Override value set as default
                    }, (error, info) => {
                        if (error) {
                            reject(error);
                            console.log(error);
                        } else {
                            console.log('Email sent: ' + info);
                            resolve(info);
                        }
                    });
                }
            });
        });
    }
}
