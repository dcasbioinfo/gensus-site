/**
 * Concatena classes CSS de forma condicional.
 * Aceita argumentos que podem ser strings, undefined, null ou false e retorna uma string com as classes válidas.
 *
 * Exemplo:
 *   cn('btn', condition && 'btn-active', false) -> "btn btn-active"
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Realiza um scroll suave até o elemento com o ID fornecido.
 *
 * Exemplo:
 *   scrollToElement('contact') // Faz scroll até o elemento com id="contact"
 */
export function scrollToElement(id: string): void {
  if (typeof document !== 'undefined') {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

/**
 * Formata uma string de data para o padrão dd/mm/yyyy.
 *
 * Exemplo:
 *   formatNewsDate("2023-10-10T15:30:00Z") -> "10/10/2023"
 */
export function formatNewsDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
}

/**
 * Converte a primeira letra de um texto para maiúscula.
 */
export function capitalize(text: string): string {
  if (!text) return '';
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/**
 * Função simulada de requisição de API.
 * Em um site estático, chamadas dinâmicas de API não estão disponíveis.
 * Se algum componente invocar essa função, ela lançará um erro.
 */
export async function apiRequest(): Promise<never> {
  throw new Error("Chamadas dinâmicas de API não estão disponíveis em um site estático.");
}

