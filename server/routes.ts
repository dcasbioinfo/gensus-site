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
      
      // In a real app, we would save this to a database
      // and potentially send an email notification
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
