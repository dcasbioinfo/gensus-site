import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { apiRequest } from '@/lib/queryClient';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(3, { message: 'Nome deve ter pelo menos 3 caracteres' }),
  email: z.string().email({ message: 'Email inválido' }),
  subject: z.string().min(3, { message: 'Assunto deve ter pelo menos 3 caracteres' }),
  message: z.string().min(10, { message: 'Mensagem deve ter pelo menos 10 caracteres' })
});

type FormData = z.infer<typeof formSchema>;

const Contact: React.FC = () => {
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    setSubmitting(true);
    try {
      const response = await apiRequest('POST', '/api/contact', data);
      const result = await response.json();
      
      toast({
        title: "Mensagem enviada",
        description: "Agradecemos o seu contato. Retornaremos em breve.",
        variant: "default",
      });
      
      reset();
    } catch (error) {
      console.error('Erro ao enviar formulário:', error);
      toast({
        title: "Erro",
        description: "Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 bg-neutral">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-primary text-center">Entre em Contato</h2>
          
          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">Envie sua mensagem</h3>
                
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-4">
                    <Label htmlFor="name" className="mb-1">Nome</Label>
                    <Input 
                      id="name" 
                      placeholder="Seu nome" 
                      {...register('name')} 
                      className={errors.name ? 'border-red-500' : ''}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="email" className="mb-1">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="seu@email.com" 
                      {...register('email')} 
                      className={errors.email ? 'border-red-500' : ''}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="subject" className="mb-1">Assunto</Label>
                    <Input 
                      id="subject" 
                      placeholder="Assunto da mensagem" 
                      {...register('subject')} 
                      className={errors.subject ? 'border-red-500' : ''}
                    />
                    {errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div className="mb-4">
                    <Label htmlFor="message" className="mb-1">Mensagem</Label>
                    <Textarea 
                      id="message" 
                      rows={4} 
                      placeholder="Sua mensagem..." 
                      {...register('message')} 
                      className={errors.message ? 'border-red-500' : ''}
                    />
                    {errors.message && (
                      <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={submitting}
                  >
                    {submitting ? 'Enviando...' : 'Enviar Mensagem'}
                  </Button>
                </form>
              </CardContent>
              
              <div className="bg-primary text-white p-6 md:p-8">
                <h3 className="text-xl font-bold mb-6">Informações de Contato</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-xl">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm opacity-80">genomas_sus@usp.br</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4 mt-6">
                    <h4 className="font-medium mb-3">Redes Sociais</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="https://www.youtube.com/@GenomasSUS" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-secondary transition-colors"
                        aria-label="YouTube do Genomas SUS"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                        </svg>
                      </a>
                      <a 
                        href="https://www.instagram.com/genomas_sus/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-secondary transition-colors"
                        aria-label="Instagram do Genomas SUS"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/genomas-sus/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-white hover:text-secondary transition-colors"
                        aria-label="LinkedIn do Genomas SUS"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4 mt-6">
                    <p className="text-sm opacity-80">
                      Preencha o formulário ao lado para entrar em contato conosco.
                      Nossa equipe irá responder o mais breve possível.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
