import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactMessageSchema } from "@shared/schema";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // API route for contact form
  app.post("/api/contact", async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactMessageSchema.parse(req.body);
      
      // Store the contact message
      const contactMessage = {
        name: validatedData.name,
        email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message
      };
      
      // In a production environment, you would send this message to genomas_sus@usp.br
      // using a mail service like NodeMailer or a third-party service like SendGrid
      /*
      // Example with nodemailer:
      const transporter = nodemailer.createTransport({
        host: "smtp.example.com",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASSWORD,
        },
      });
      
      await transporter.sendMail({
        from: '"Genomas SUS Website" <no-reply@genomassus.org>',
        to: "genomas_sus@usp.br",
        subject: `Contato via Website: ${contactMessage.subject}`,
        text: `Nome: ${contactMessage.name}\nEmail: ${contactMessage.email}\n\nMensagem:\n${contactMessage.message}`,
        html: `<p><strong>Nome:</strong> ${contactMessage.name}</p>
               <p><strong>Email:</strong> ${contactMessage.email}</p>
               <p><strong>Mensagem:</strong></p>
               <p>${contactMessage.message.replace(/\n/g, '<br>')}</p>`,
      });
      */
      
      // For now, we'll just log it
      console.log("Received contact message:", contactMessage);
      
      return res.status(200).json({ success: true, message: "Mensagem recebida com sucesso!" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const validationError = fromZodError(error);
        return res.status(400).json({ 
          success: false, 
          message: "Erro de validação", 
          errors: validationError.message 
        });
      }
      
      return res.status(500).json({ 
        success: false, 
        message: "Ocorreu um erro ao processar sua mensagem. Por favor, tente novamente." 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
