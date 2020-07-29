const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
// const OAuth2 = google.auth.OAuth2;

export default (req, res) => {
  async function main() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    // let testAccount = await nodemailer.createTestAccount();

    if (req.method === "POST") {
      console.log("post");
      let body = JSON.parse(req.body);

      let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
          type: "OAuth2",
          user: "landaxellc@gmail.com",
          clientId: `${process.env.GOOGLE_OAUTH_CLIENT_ID}`,
          clientSecret: `${process.env.GOOGLE_OAUTH_SECRET}`,
          refreshToken: `${process.env.GOOGLE_OAUTH_REFRESH_TOKEN}`,
        },
      });

      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: "landaxellc@gmail.com", // sender address
        to: `landaxellc@gmail.com`, // list of receivers
        subject: "Request for Land Purchase Offer", // Subject line
        generateTextFromHtml: true,
        html: `
            <strong>Name:</strong> ${body.firstName} ${body.lastName}<br>
            <strong>Phone:</strong> ${body.phone}<br>
            <strong>Email:</strong> ${body.email}<br>
            <strong>Parcel Number:</strong> ${body.parcelNumber}<br>
            <strong>Property Address:</strong> ${body.propertyAddress}<br>
            <strong>State</strong>: ${body.propertyState}<br>
            <strong>Zip Code</strong>: ${body.propertyZipCode}<br>
            <strong>Property Details</strong>: ${body.propertyDetails}<br>
            <strong>Asking Price</strong>: ${body.askingPrice}
            `, // html body
      });

      console.log("Message sent: %s", info.messageId);
      res.statusCode = 200;
      res.end();
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      // console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    }
  }
  main().catch(console.error);
};
