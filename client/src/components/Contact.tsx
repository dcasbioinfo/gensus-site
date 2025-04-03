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
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Endereço</h4>
                      <p className="text-sm opacity-80">
                        Universidade de São Paulo - USP<br />
                        Av. Bandeirantes, 3900<br />
                        Ribeirão Preto - SP, 14049-900
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-xl">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-sm opacity-80">contato@genomassus.org.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 mr-3 text-xl">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-medium">Telefone</h4>
                      <p className="text-sm opacity-80">(16) 3315-0000</p>
                    </div>
                  </div>
                  
                  <div className="border-t border-white/20 pt-4 mt-6">
                    <h4 className="font-medium mb-3">Conecte-se</h4>
                    <div className="flex space-x-4">
                      <a href="#" className="text-white hover:text-secondary transition-colors">
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                      <a href="#" className="text-white hover:text-secondary transition-colors">
                        <i className="fab fa-facebook text-xl"></i>
                      </a>
                      <a href="#" className="text-white hover:text-secondary transition-colors">
                        <i className="fab fa-instagram text-xl"></i>
                      </a>
                      <a href="#" className="text-white hover:text-secondary transition-colors">
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                    </div>
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
