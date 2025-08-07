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

## 🔌 Integración con Backend

### APIs Externas Utilizadas

El proyecto integra múltiples servicios backend para diferentes funcionalidades:

#### 1. **API de Formularios de Socios**
- **URL Base**: `https://backend-api-service.up.railway.app/api/`
- **Endpoints**:
  - `POST /send-individual` - Formulario de socios individuales
  - `POST /send-empresa` - Formulario de socios empresariales
- **Propósito**: Envío de formularios de registro de socios
- **Formato**: FormData (multipart/form-data) para archivos e imágenes

#### 2. **API de Base de Datos (Supabase)**
- **URL Base**: `https://backend-socios-production.up.railway.app/`
- **Endpoints**:
  - `POST /registrar-socio-individual` - Registro en BD para socios individuales
  - `POST /registrar-socio-empresa` - Registro en BD para socios empresariales
- **Propósito**: Persistencia de datos en base de datos
- **Formato**: JSON

### Flujo de Datos en Formularios

#### Formulario Individual (`FormIndividual.jsx`)
```javascript
// 1. Validación local del formulario
const validateForm = () => {
  const requiredFields = ["nombres", "cedula", "telefono", "email", "direccion1", "pais", "afiliacion", "terminos"];
  return requiredFields.every((field) => formData[field]);
};

// 2. Envío a Supabase (Base de Datos)
const supabaseResponse = await fetch(SUPABASE_API_URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(dataToSend)
});

// 3. Envío a API de Formularios (Email/Notificación)
const response = await fetch(API_URL, {
  method: "POST",
  body: formDataToSend // FormData para archivos
});
```

#### Formulario Empresa (`FormEmpresa.jsx`)
```javascript
// 1. Validación local del formulario
const validateForm = () => {
  const requiredFields = ["tipoSocio", "fotoCedula", "nombres", "apellidos", "cedulaIdentidad", "telefono", "email", "direccionResidencia", "municipio", "provincia", "terminos"];
  return requiredFields.every((field) => formData[field]);
};

// 2. Envío a Supabase (Base de Datos)
const supabaseResponse = await fetch(SUPABASE_API_URLS, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(dataToSends)
});

// 3. Envío a API de Formularios (Email/Notificación)
const response = await fetch(API_URL, {
  method: "POST",
  body: formDataToSend // FormData para archivos
});
```

### Estructura de Datos Enviados

#### Datos de Socio Individual
```javascript
{
  nombres: string,
  apellidos: string,
  cedula: string, // Formato: XXX-XXXXXXX-X
  telefono: string, // Formato: XXX-XXX-XXXX
  email: string,
  direccion: string,
  ciudad: string,
  estado_provincia: string,
  pais: string,
  afiliacion_ciudad: string
}
```

#### Datos de Socio Empresa
```javascript
{
  tipo_socio_empresa: string,
  nombres_gerente: string,
  apellidos_gerente: string,
  cedula_gerente: string,
  telefono_gerente: string,
  email_gerente: string,
  direccion_gerente: string,
  municipio_gerente: string,
  provincia_gerente: string,
  razon_social_empresa: string,
  rnc_empresa: string,
  registro_mercantil: string,
  actividad_economica: string,
  direccion_empresa: string,
  telefono_empresa: string,
  email_empresa: string
}
```

### Manejo de Errores

#### Validación Local
- Validación de campos requeridos antes del envío
- Formateo automático de cédula y teléfono
- Validación de tipos de archivo para imágenes

#### Manejo de Respuestas del Backend
```javascript
// Verificación de respuesta de Supabase
if (supabaseResponse.ok) {
  toast.success("Datos guardados exitosamente");
} else {
  toast.error(supabaseResult.message || "Error al guardar los datos.");
  return;
}

// Verificación de respuesta de API de formularios
if (response.ok) {
  toast.success("Formulario enviado exitosamente");
} else {
  toast.error("Error al enviar el formulario");
}
```

### Configuración de URLs

#### Variables de Entorno Recomendadas
```bash
# .env
VITE_API_BASE_URL=https://backend-api-service.up.railway.app/api
VITE_SUPABASE_API_URL=https://backend-socios-production.up.railway.app
VITE_EMAIL_API_URL=https://backend-api-service.up.railway.app/api
```

#### Uso en Componentes
```javascript
// En lugar de URLs hardcodeadas, usar variables de entorno
const API_URL = import.meta.env.VITE_API_BASE_URL + "/send-individual";
const SUPABASE_API_URL = import.meta.env.VITE_SUPABASE_API_URL + "/registrar-socio-individual";
```

### Consideraciones de Seguridad

#### Validación de Datos
- Validación tanto en frontend como backend
- Sanitización de inputs antes del envío
- Validación de tipos de archivo para uploads

#### Manejo de Archivos
- Límite de tamaño de archivo (recomendado: 5MB)
- Tipos de archivo permitidos: `image/*`
- Validación de extensión antes del envío

### Testing de APIs

#### Endpoints de Prueba
```bash
# Probar formulario individual
curl -X POST https://backend-api-service.up.railway.app/api/send-individual \
  -F "nombres=Juan" \
  -F "apellidos=Pérez" \
  -F "cedula=123-4567890-1" \
  -F "telefono=809-123-4567" \
  -F "email=test@example.com"

# Probar registro en Supabase
curl -X POST https://backend-socios-production.up.railway.app/registrar-socio-individual \
  -H "Content-Type: application/json" \
  -d '{"nombres":"Juan","apellidos":"Pérez","cedula":"123-4567890-1"}'
```

### Características Específicas de Formularios

#### Formateo Automático de Datos
```javascript
// Formato de cédula: XXX-XXXXXXX-X
const formatCedula = (value) => {
  const cleanValue = value.replace(/\D/g, "");
  let formattedValue = cleanValue;
  if (cleanValue.length > 3 && cleanValue.length <= 10) {
    formattedValue = `${cleanValue.slice(0, 3)}-${cleanValue.slice(3, 10)}-${cleanValue.slice(10)}`;
  } else if (cleanValue.length > 10) {
    formattedValue = `${cleanValue.slice(0, 3)}-${cleanValue.slice(3, 10)}-${cleanValue.slice(10, 11)}`;
  }
  return formattedValue;
};

// Formato de teléfono: XXX-XXX-XXXX
const formatTelefono = (value) => {
  const cleanValue = value.replace(/\D/g, "");
  let formattedValue = cleanValue;
  if (cleanValue.length > 3 && cleanValue.length <= 6) {
    formattedValue = `${cleanValue.slice(0, 3)}-${cleanValue.slice(3)}`;
  } else if (cleanValue.length > 6) {
    formattedValue = `${cleanValue.slice(0, 3)}-${cleanValue.slice(3, 6)}-${cleanValue.slice(6)}`;
  }
  return formattedValue;
};
```

#### Validación de Campos
- **Campos requeridos**: Marcados con asterisco rojo (*)
- **Validación en tiempo real**: Bordes rojos para campos vacíos
- **Validación de email**: Formato estándar de email
- **Validación de archivos**: Solo imágenes permitidas

#### Componentes de Formulario
- **FormIndividual.jsx**: Formulario para socios individuales
- **FormEmpresa.jsx**: Formulario para socios empresariales
- **DepositInfo.jsx**: Componente de información de depósito

#### Notificaciones de Usuario
```javascript
// Uso de React Hot Toast para notificaciones
import toast, { Toaster } from "react-hot-toast";

// Notificaciones de éxito
toast.success("Formulario enviado exitosamente");

// Notificaciones de error
toast.error("Por favor, completa todos los campos requeridos.");
```

### Monitoreo y Logs

#### Logs Recomendados
```javascript
// Logging de errores de API
catch (error) {
  console.error("Error al enviar formulario:", error);
  console.error("Datos enviados:", formData);
  toast.error("Hubo un problema al enviar el formulario");
}
```

#### Métricas de Rendimiento
- Tiempo de respuesta de APIs
- Tasa de éxito de envíos
- Errores por endpoint

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


