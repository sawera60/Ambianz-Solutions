import sendEmail from "../config/sendEmail.js";
import { QuoteRequest } from "../models/quoterequest.model.js";

export const createQuoteRequest = async (req, res) => {
  try {
    const { fullName, email, phoneNumber, service, location, message } =
      req.body;

    if (
      !fullName ||
      !email ||
      !phoneNumber ||
      !service ||
      !location ||
      !message
    ) {
      return res.status(400).json({
        message: "All fields are required",
        success: false,
      });
    }

    const newQuote = await QuoteRequest.create({
      fullName,
      email,
      phoneNumber,
      service,
      location,
      message,
    });

    const adminEmail = process.env.EMAIL_USER;
    const emailSubject = `New Quote Request: ${service} - ${fullName}`;
    const emailText = `
Hello,

You have received a new quote request on Ambianz Solutions:

Customer Details:
- Name: ${fullName}
- Email: ${email}
- Phone Number: ${phoneNumber}
- Location: ${location}

Project Interest:
- Service Requested: ${service}

Customer Message:
"${message}"

---
Please respond to the customer at your earliest convenience.
    `;

    await sendEmail(adminEmail, emailSubject, emailText);

    const userEmailSubject = `Quote Request Received - Ambianz Solutions`;
    const userEmailText = `
Hello ${fullName},

Thank you for contacting Ambianz Solutions!

We have received your quote request. Our team is reviewing the details and will get back to you soon.

Here is a summary of the details you submitted:
- Service: ${service}
- Location: ${location}
- Message: ${message}

Best regards,
The Ambianz Solutions Team
    `;

    await sendEmail(email, userEmailSubject, userEmailText);

    return res.status(201).json({
      message: "Quote request submitted successfully",
      success: true,
      quote: newQuote,
    });
  } catch (error) {
    console.error("Error in createQuoteRequest:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
    });
  }
};

export const getQuoteRequests = async (req, res) => {
  try {
    const quotes = await QuoteRequest.find({}).sort({ createdAt: -1 });
    return res.status(200).json({
      message: "Quotes retrieved successfully",
      success: true,
      quotes,
    });
  } catch (error) {
    console.error("Error in getQuoteRequests:", error);
    return res.status(500).json({
      message: "Internal Server Error",
      error: error.message,
      success: false,
    });
  }
};
