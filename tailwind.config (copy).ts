import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        // Cores principais do Genomas SUS baseadas nas cores fornecidas
        background: "#f8fafd", // Fundo claro para toda a aplicação
        foreground: "#30466f", // Cor principal para texto em toda a aplicação
        
        // Azul escuro - cor principal
        // Usado para: textos importantes, cabeçalhos, rodapés, elementos de navegação principal
        primary: {
          DEFAULT: "#30466f", // rgb(48, 70, 111)
          50: "#f2f5f9",      // Fundos de áreas destacadas, cards hover
          100: "#e3e8f0",     // Bordas sutis, separadores
          200: "#c7d1e2",     // Fundos alternativos, áreas de dados secundários
          300: "#a4b4cf",     // Ícones secundários, elementos decorativos
          400: "#7d93b9",     // Elementos interativos em estado normal
          500: "#5c75a3",     // Subtítulos, links visitados
          600: "#465d8b",     // Elementos interativos em hover
          700: "#30466f",     // Valor principal - Textos, cabeçalhos, navegação
          800: "#293a5c",     // Elementos de UI em estado pressionado
          900: "#23324f",     // Fundos escuros, rodapés
          950: "#131b2c",     // Elementos de alto contraste, modais
        },
        
        // Azul médio - cor secundária
        // Usado para: botões principais, links, elementos interativos, indicadores de progresso
        secondary: {
          DEFAULT: "#688cd9", // rgb(104, 140, 217)
          50: "#f4f7fe",      // Fundos de notificações leves
          100: "#e9effc",     // Bordas de elementos interativos
          200: "#d3dff9",     // Indicadores de seleção
          300: "#b0c6f4",     // Estados hover de elementos interativos
          400: "#8aa9eb",     // Elementos decorativos, ícones
          500: "#688cd9",     // Valor principal - Botões, links, barras de progresso
          600: "#4a6fc0",     // Estados ativos, elementos selecionados
          700: "#3c5aa0",     // Elementos pressionados
          800: "#344a83",     // Elementos de UI em estados alternativos
          900: "#2f4169",     // Detalhes de interface em áreas escuras
          950: "#1e293f",     // Fundos contrastantes para elementos importantes
        },
        
        // Azul claro - terciária
        // Usado para: áreas de dados, gráficos, elementos de interface secundários, fundos de seções
        tertiary: {
          DEFAULT: "#90c6e0", // rgb(144, 198, 224)
          50: "#f2f9fc",      // Fundos de painéis de dados
          100: "#e6f2f9",     // Áreas de entrada de dados
          200: "#c5e4f1",     // Fundos de componentes leves
          300: "#90c6e0",     // Valor principal - Gráficos, visualizações de dados, cards
          400: "#5eaad0",     // Estados hover de elementos terciários
          500: "#3c8fb9",     // Elementos de navegação secundária
          600: "#2c729a",     // Estados ativos de elementos terciários
          700: "#255b7c",     // Elementos pressionados
          800: "#234c67",     // Detalhes de alto contraste
          900: "#214056",     // Textos sobre fundos claros em seções terciárias
          950: "#142a38",     // Elementos de contraste extremo
        },
        
        // Verde suave
        // Usado para: indicadores de saúde, elementos de sucesso, áreas relacionadas a resultados positivos
        green: {
          DEFAULT: "#c2e0cc", // rgb(194, 224, 204)
          50: "#f6fbf7",      // Fundos de mensagens de sucesso sutis
          100: "#edf7ef",     // Bordas de elementos de sucesso
          200: "#c2e0cc",     // Valor principal - Indicadores de saúde, resultados positivos
          300: "#9ecbae",     // Estados hover de elementos de saúde
          400: "#76b188",     // Ícones de confirmação, check marks
          500: "#559369",     // Textos de sucesso, botões de confirmação
          600: "#407655",     // Estados ativos de elementos de saúde
          700: "#345f45",     // Elementos pressionados
          800: "#2c4c39",     // Textos sobre fundos claros em áreas verdes
          900: "#253f30",     // Elementos de contraste em seções verdes
          950: "#12241a",     // Elementos de alto contraste
        },
        
        // Amarelo âmbar - cor de destaque/accent
        // Usado para: destaques, alertas, elementos que precisam de atenção, CTAs secundários
        accent: {
          DEFAULT: "#dfbb2b", // rgb(223, 187, 43)
          50: "#fdfbec",      // Fundos de notificações de alerta sutis
          100: "#faf6d4",     // Bordas de alertas
          200: "#f5eba9",     // Fundos de alertas mais pronunciados
          300: "#eeda74",     // Elementos decorativos de destaque
          400: "#dfbb2b",     // Valor principal - Botões de destaque, badges, alertas
          500: "#cfa81e",     // Estados hover de elementos de destaque
          600: "#ad8116",     // Estados ativos, elementos selecionados
          700: "#865c16",     // Elementos pressionados
          800: "#724a19",     // Textos sobre fundos claros em áreas de destaque
          900: "#633f19",     // Elementos de contraste em seções de destaque
          950: "#3a210c",     // Elementos de alto contraste
        },
        
        // Estados funcionais
        success: "#559369", // Verde médio - Mensagens de sucesso, confirmações, resultados positivos
        error: "#d04848",   // Vermelho - Mensagens de erro, alertas críticos, dados negativos
        warning: "#dfbb2b", // Amarelo âmbar - Avisos, alertas, notificações importantes
        info: "#688cd9",    // Azul médio - Mensagens informativas, tooltips, ajuda
        
        // Cores para gráficos de dados científicos e visualizações
        chart: {
          1: "#30466f", // Azul escuro - Categoria principal em gráficos, dados primários
          2: "#688cd9", // Azul médio - Segunda categoria, comparações, tendências
          3: "#90c6e0", // Azul claro - Terceira categoria, dados complementares
          4: "#c2e0cc", // Verde suave - Dados positivos, resultados favoráveis
          5: "#dfbb2b", // Amarelo âmbar - Pontos de atenção, destaques em gráficos
          6: "#4d6994", // Azul escuro variação - Subcategorias relacionadas à principal
          7: "#79a9c8", // Azul médio variação - Dados históricos, comparativos
          8: "#a5d3b4", // Verde variação - Indicadores secundários de saúde
        },
        
        // Manutenção das cores do sistema
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        
        // Barra lateral 
        sidebar: {
          DEFAULT: "#30466f", // Azul escuro como fundo da barra lateral
          foreground: "#f8fafd", // Texto claro na barra lateral
          primary: "#688cd9", // Azul médio para elementos de navegação ativos
          "primary-foreground": "#ffffff", // Texto sobre elementos primários
          accent: "#dfbb2b", // Amarelo para badges e notificações na barra
          "accent-foreground": "#30466f", // Texto azul escuro sobre elementos amarelos
          border: "#3c5aa0", // Borda um pouco mais clara que o fundo
          ring: "#688cd9", // Foco em elementos interativos
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(48, 70, 111, 0.05), 0 10px 20px -2px rgba(48, 70, 111, 0.03)',
        'card': '0 4px 6px -1px rgba(48, 70, 111, 0.07), 0 2px 4px -1px rgba(48, 70, 111, 0.04)',
        'subtle': '0 1px 3px rgba(48, 70, 111, 0.04), 0 1px 2px rgba(48, 70, 111, 0.06)',
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
