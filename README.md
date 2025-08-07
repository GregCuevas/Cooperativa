# 🏦 Cooperativa - Sitio Web Institucional

## 📋 Descripción General

Este es el sitio web oficial de la Cooperativa, una aplicación web moderna desarrollada en React que presenta los servicios financieros, productos tecnológicos y información institucional de la cooperativa. El proyecto incluye una tienda en línea, calculadora de préstamos, información sobre servicios financieros y un blog con noticias y publicaciones.

## 🚀 Características Principales

### 🏠 Páginas Principales
- **Página de Inicio**: Presentación de la cooperativa con secciones destacadas
- **Tienda en Línea**: Catálogo de productos tecnológicos con carrito de compras
- **Servicios Financieros**: Información sobre ahorro, préstamos, depósitos y aportes
- **Sección Institucional**: Historia, perfil institucional, políticas y términos
- **Blog y Noticias**: Publicaciones sobre impacto social, educación, conectividad y más
- **Contacto y Sucursales**: Información de contacto y ubicaciones

### 🛒 Funcionalidades de la Tienda
- Catálogo de productos tecnológicos (tablets, laptops)
- Carrito de compras con persistencia en localStorage
- Sistema de cuotas y aportes
- Filtros por categorías
- Detalles de productos con múltiples imágenes
- Cálculo automático de totales

### 🧮 Herramientas Interactivas
- Calculadora de préstamos
- Mapa interactivo de sucursales
- Formularios de contacto
- Sistema de notificaciones con toast

## 🛠️ Tecnologías Utilizadas

### Frontend
- **React 18.3.1**: Biblioteca principal para la interfaz de usuario
- **React Router DOM 6.26.1**: Enrutamiento de la aplicación
- **Vite 5.4.1**: Herramienta de construcción y desarrollo
- **Tailwind CSS 3.4.10**: Framework de CSS utilitario
- **Radix UI**: Componentes de interfaz accesibles
- **Lucide React**: Iconografía moderna

### Herramientas de Desarrollo
- **ESLint**: Linting de código JavaScript/React
- **PostCSS**: Procesamiento de CSS
- **SWC**: Compilador rápido para React

### Librerías Adicionales
- **React Hot Toast**: Notificaciones toast
- **React Map GL**: Integración con mapas
- **Mapbox GL**: Servicios de mapas
- **Class Variance Authority**: Utilidades para variantes de componentes
- **Tailwind Merge**: Combinación inteligente de clases CSS

## 📁 Estructura del Proyecto

```
Cooperativa/
├── public/                    # Archivos estáticos
│   ├── images/               # Imágenes de productos
│   └── robots.txt            # Configuración SEO
├── src/
│   ├── api/                  # APIs y servicios
│   ├── assets/               # Recursos estáticos (imágenes, logos)
│   ├── auth/                 # Autenticación
│   ├── components/           # Componentes reutilizables
│   │   ├── cart/            # Componentes del carrito
│   │   ├── context/         # Contextos de React
│   │   ├── forms/           # Formularios
│   │   ├── layouts/         # Layouts principales
│   │   ├── products/        # Componentes de productos
│   │   ├── sections/        # Secciones de páginas
│   │   └── ui/              # Componentes de UI base
│   ├── context/             # Contextos globales
│   ├── data/                # Datos estáticos
│   ├── lib/                 # Utilidades
│   ├── pages/               # Páginas de la aplicación
│   │   ├── contacto/        # Páginas de contacto
│   │   ├── home/            # Página principal
│   │   ├── informacion/     # Páginas informativas
│   │   ├── institucional/   # Páginas institucionales
│   │   ├── noticias/        # Páginas de noticias
│   │   ├── servicios/       # Páginas de servicios
│   │   ├── socios/          # Páginas de socios
│   │   └── tienda/          # Página de la tienda
│   └── routes/              # Configuración de rutas
├── package.json             # Dependencias y scripts
├── tailwind.config.js       # Configuración de Tailwind
├── vite.config.js           # Configuración de Vite
└── vercel.json              # Configuración de despliegue
```

## 🚀 Instalación y Configuración

### Prerrequisitos
- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de Instalación

1. **Clonar el repositorio**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd Cooperativa
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno**
   ```bash
   # Crear archivo .env en la raíz del proyecto
   # Añadir variables necesarias para APIs externas
   ```

4. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

5. **Construir para producción**
   ```bash
   npm run build
   ```

## 📱 Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Previsualiza la build de producción
- `npm run start`: Inicia el servidor de preview

## 🎨 Sistema de Diseño

### Colores y Tipografía
- **Fuente principal**: Roboto
- **Sistema de colores**: Basado en HSL con variables CSS
- **Componentes**: Utilizando Radix UI para accesibilidad

### Componentes UI
El proyecto utiliza un sistema de componentes modular con:
- Componentes base en `src/components/ui/`
- Componentes específicos organizados por funcionalidad
- Contextos para estado global (carrito, autenticación)

## 🛒 Sistema de Carrito

### Funcionalidades
- **Persistencia**: Los datos se guardan en localStorage
- **Gestión de estado**: Utiliza React Context para estado global
- **Cálculos automáticos**: Total de items, precio y cuotas
- **Operaciones**: Añadir, actualizar cantidad, eliminar, vaciar

### Estructura de Datos
```javascript
{
  id: number,
  name: string,
  aporte: number,
  cuota: number,
  quantity: number,
  image: string,
  // ... otros campos del producto
}
```

## 🗺️ Sistema de Rutas

### Rutas Principales
- `/` - Página de inicio
- `/tienda` - Catálogo de productos
- `/calculadora-prestamos` - Calculadora de préstamos
- `/historia` - Historia de la cooperativa
- `/cuentas-de-ahorro` - Información sobre ahorro
- `/financiamiento` - Servicios de financiamiento
- `/socio-individual` - Formulario para socios individuales
- `/socio-empresa` - Formulario para socios empresariales
- `/contacto` - Información de contacto
- `/sucursales` - Ubicaciones de sucursales

### Rutas de Noticias
- `/publicaciones/el-impacto-transformador-de-las-cooperativas-en-la-republica-dominicana`
- `/publicaciones/conectando-el-campo-la-imperiosa-necesidad-de-herramientas-de-telecomunicacion-en-las-areas-rurales-de-la-republica-dominicana`
- `/publicaciones/revolucionando-la-educacion-el-impacto-de-las-telecomunicaciones-en-el-aprendizaje`
- `/publicaciones/el-auge-del-teletrabajo-transformando-la-forma-en-que-trabajamos`
- `/publicaciones/conectividad-5g-un-requisito-de-la-unesco-para-la-educacion-en-la-era-digital-en-la-republica-dominicana`

## 📊 Gestión de Estado

### Contextos Utilizados
- **CartContext**: Manejo del carrito de compras
- **Estado local**: Para componentes específicos

### Patrones de Estado
- Estado local con `useState` para componentes simples
- Context API para estado compartido entre componentes
- localStorage para persistencia de datos del usuario

## 🎯 Características SEO

### Configuración
- Sitemap automático con `vite-plugin-sitemap`
- Meta tags optimizados
- URLs amigables para SEO
- Estructura semántica HTML

### Dominio Configurado
- Hostname: `https://www.coopebred.com`

## 🚀 Despliegue

### Vercel (Configurado)
El proyecto está configurado para despliegue en Vercel con:
- Configuración en `vercel.json`
- Build automático desde el repositorio
- Optimizaciones de rendimiento

### Otros Proveedores
El proyecto puede desplegarse en cualquier proveedor que soporte aplicaciones React:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront
- Firebase Hosting

## 🔧 Configuración de Desarrollo

### ESLint
- Configuración para React
- Reglas de hooks
- Refresco automático

### Vite
- Hot Module Replacement (HMR)
- Alias de rutas configurado (`@` apunta a `src/`)
- Optimizaciones de build

### Tailwind CSS
- Configuración personalizada
- Animaciones con `tailwindcss-animate`
- Sistema de colores HSL
- Componentes con variantes

## 📝 Convenciones de Código

### Estructura de Archivos
- Componentes en PascalCase
- Hooks personalizados con prefijo `use`
- Utilidades en camelCase
- Constantes en UPPER_SNAKE_CASE

### Nomenclatura
- Componentes: `ComponentName.jsx`
- Hooks: `useHookName.js`
- Utilidades: `utilityName.js`
- Páginas: `PageName.jsx`

## 🤝 Contribución

### Flujo de Trabajo
1. Fork del repositorio
2. Crear rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit de cambios (`git commit -am 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Crear Pull Request

### Estándares de Código
- Usar ESLint para mantener consistencia
- Seguir convenciones de React
- Documentar componentes complejos
- Mantener componentes pequeños y reutilizables

## 📞 Soporte

Para soporte técnico o preguntas sobre el proyecto:
- Revisar la documentación de las librerías utilizadas
- Consultar issues del repositorio


## 📄 Licencia

Este proyecto es propiedad de la Cooperativa y está destinado para uso interno y público de la institución.

---


