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
        // Cores base
        background: "#f8fafd", // Fundo claro principal (quase branco)
        foreground: "#30466f", // Cor principal para texto (azul escuro)

        // Azul Escuro - Cor Primária (Confiança, Profissionalismo)
        // Usado para: textos importantes, cabeçalhos, rodapés, fundo da sidebar
        primary: {
          DEFAULT: "#30466f", // rgb(48, 70, 111)
          50: "#f2f5f9",
          100: "#e3e8f0",
          200: "#c7d1e2",
          300: "#a4b4cf",
          400: "#7d93b9",
          500: "#5c75a3",
          600: "#465d8b",
          700: "#30466f", // Valor Principal
          800: "#293a5c",
          900: "#23324f",
          950: "#131b2c",
        },

        // Azul Médio - Cor Secundária (Interação, Informação)
        // Usado para: botões principais, links, elementos interativos, indicadores
        secondary: {
          DEFAULT: "#688cd9", // rgb(104, 140, 217) - Pode ser levemente ajustado se quiser mais brilho, ex: #5C85D6
          50: "#f4f7fe",
          100: "#e9effc",
          200: "#d3dff9",
          300: "#b0c6f4",
          400: "#8aa9eb",
          500: "#688cd9", // Valor Principal
          600: "#4a6fc0",
          700: "#3c5aa0",
          800: "#344a83",
          900: "#2f4169",
          950: "#1e293f",
        },

        // Azul Claro - Cor Terciária (Fundos, Elementos de UI sutis)
        // Usado para: áreas de dados, gráficos secundários, fundos de seções
        tertiary: {
          DEFAULT: "#90c6e0", // rgb(144, 198, 224) - Pode ser ajustado para mais saturação se desejado, ex: #88C0D0
          50: "#f2f9fc",
          100: "#e6f2f9",
          200: "#c5e4f1",
          300: "#90c6e0", // Valor Principal
          400: "#5eaad0",
          500: "#3c8fb9",
          600: "#2c729a",
          700: "#255b7c",
          800: "#234c67",
          900: "#214056",
          950: "#142a38",
        },

        // Teal (Verde-Azulado) - Sucesso, Saúde, Natureza (Moderno)
        // Usado para: indicadores de saúde/sucesso, elementos positivos, tags
        success: { // Renomeando 'green' para 'success' semanticamente
          DEFAULT: "#14B8A6", // rgb(20, 184, 166) - Tailwind Teal 500
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14B8A6", // Valor Principal
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a",
          950: "#042f2e",
        },

        // Ciano (Cyan) - Destaque/Accent (Inovação, Tecnologia)
        // Usado para: CTAs secundários, highlights, notificações importantes (não-críticas)
        accent: {
          DEFAULT: "#06B6D4", // rgb(6, 182, 212) - Tailwind Cyan 500
          50: "#ecfeff",
          100: "#cffafe",
          200: "#a5f3fc",
          300: "#67e8f9",
          400: "#22d3ee",
          500: "#06B6D4", // Valor Principal
          600: "#0891b2",
          700: "#0e7490",
          800: "#155e75",
          900: "#164e63",
          950: "#083344",
        },

        // Estados funcionais (Cores mais vibrantes e standard)
        status: { // Agrupando estados para clareza
          success: {
            DEFAULT: "#14B8A6", // Teal 500 (consistente com a paleta 'success')
            foreground: "#042f2e", // Texto escuro sobre fundo success
            background: "#ccfbf1", // Fundo claro para alertas success
          },
          error: {
            DEFAULT: "#EF4444", // rgb(239, 68, 68) - Tailwind Red 500 (mais vibrante)
            foreground: "#7f1d1d", // Texto escuro sobre fundo error
            background: "#fee2e2", // Fundo claro para alertas error
          },
          warning: {
            DEFAULT: "#F59E0B", // rgb(245, 158, 11) - Tailwind Amber 500 (bom para avisos)
            foreground: "#78350f", // Texto escuro sobre fundo warning
            background: "#fffbeb", // Fundo claro para alertas warning
          },
          info: {
            DEFAULT: "#3B82F6", // rgb(59, 130, 246) - Tailwind Blue 500 (claro e informativo)
            foreground: "#1e3a8a", // Texto escuro sobre fundo info
            background: "#dbeafe", // Fundo claro para alertas info
          }
        },

        // Cores para gráficos (Incluindo as novas cores)
        chart: {
          1: "#30466f", // Azul Escuro (Primary)
          2: "#688cd9", // Azul Médio (Secondary)
          3: "#06B6D4", // Ciano (Accent) - Bom para destaque
          4: "#14B8A6", // Teal (Success) - Dados positivos
          5: "#90c6e0", // Azul Claro (Tertiary)
          6: "#F59E0B", // Âmbar (Warning) - Pontos de atenção
          7: "#465d8b", // Variação Primary
          8: "#4a6fc0", // Variação Secondary
          9: "#0891b2", // Variação Accent (Ciano)
          10: "#0d9488", // Variação Success (Teal)
        },

        // Manutenção das cores do sistema (shadcn/ui ou similar)
        border: "hsl(var(--border))", // Adicionar se não existir, geralmente derivado de um cinza ou azul claro
        input: "hsl(var(--input))", // Adicionar se não existir
        ring: "hsl(var(--ring))", // Geralmente um azul ou a cor de accent
        card: {
          DEFAULT: "hsl(var(--card))", // Geralmente branco ou um cinza muito claro
          foreground: "hsl(var(--card-foreground))", // Geralmente a cor 'foreground' principal
        },
        popover: {
          DEFAULT: "hsl(var(--popover))", // Geralmente branco ou um cinza muito claro
          foreground: "hsl(var(--popover-foreground))", // Geralmente a cor 'foreground' principal
        },
        muted: {
          DEFAULT: "hsl(var(--muted))", // Geralmente um cinza claro
          foreground: "hsl(var(--muted-foreground))", // Geralmente um cinza médio/escuro
        },
        destructive: { // Usar a cor de erro definida
          DEFAULT: "hsl(var(--destructive, 0 84.2% 60.2%))", // Mapeia para ~ #EF4444
          foreground: "hsl(var(--destructive-foreground, 0 0% 98%))", // Texto claro sobre fundo vermelho
        },

        // Barra lateral (Atualizada com as cores base)
        sidebar: {
          DEFAULT: "#30466f",           // Fundo: Azul Escuro (Primary)
          foreground: "#f8fafd",       // Texto/Ícones: Branco/Claro (Background)
          active: "#688cd9",           // Item Ativo/Hover: Azul Médio (Secondary)
          activeForeground: "#ffffff", // Texto Item Ativo: Branco
          border: "#465d8b",           // Borda sutil (Primary-600)
          ring: "#06B6D4",             // Anel de Foco: Ciano (Accent)
          notification: "#06B6D4",     // Cor de Badge/Notificação: Ciano (Accent)
          notificationForeground: "#083344", // Texto da Notificação: Ciano Escuro
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
        'soft': '0 4px 15px -3px rgba(48, 70, 111, 0.08), 0 10px 20px -5px rgba(48, 70, 111, 0.04)', // Suavizada
        'card': '0 4px 6px -1px rgba(48, 70, 111, 0.07), 0 2px 4px -2px rgba(48, 70, 111, 0.05)', // Ajustada
        'subtle': '0 1px 3px rgba(48, 70, 111, 0.05), 0 1px 2px rgba(48, 70, 111, 0.07)', // Ajustada
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
