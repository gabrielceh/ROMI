# 🩺 Patients App

Aplicación desarrollada con React + TypeScript para la gestión de pacientes.
Permite el registro de datos personales, síntomas, búsqueda y listado de pacientes por su ID.

---

## Tecnologías utilizadas

- React + TypeScript → Base del proyecto.
- Zustand → Manejo de estado global ligero y escalable.
- Day.js → Manipulación y formateo de fechas.
- clsx → Manejo sencillo y elegante de clases condicionales.
- shadcn/ui → Componentes de interfaz accesibles y personalizables.
- Zod → Validación de datos tipada y declarativa.
- React Hook Form → Manejo de formularios con validaciones eficientes.
- React Router DOM → Enrutamiento y navegación de la aplicación.

---

## Arquitectura

La arquitectura está inspirada en principios de Clean Architecture y Domain Driven Design (DDD).
Esto permite separar las responsabilidades en capas, favoreciendo la escalabilidad, el testeo y la mantenibilidad del proyecto.

Capas principales:

- Domain → Define las entidades, modelos, repositorios y contratos.
- Infrastructure → Implementación concreta de repositorios, datasources y conexión con APIs o almacenamiento local.
- UI → Componentes, páginas y estado (store) relacionados con la interfaz de usuario.
- Core → Configuraciones globales, librerías y utilidades compartidas (router, dayjs, etc.).
- Shared → Código reutilizable como hooks, utilidades, enums y componentes globales.

---

## Estructura de directorios

```
src
├── assets/                 # Archivos estáticos (imágenes, íconos, fuentes)
├── components/             # Componentes shadcn globales reutilizables
├── core/                   # Configuración y utilidades globales
│   ├── dayjs/              # Configuración global de dayjs
│   ├── router/             # Definición de rutas principales
├── lib/                    # Configuración y utilidades globales
├── modules/                # Módulos funcionales de la app
│   └── patients/           # Módulo de pacientes
│   │   ├── domain/         # Reglas de negocio (entidades, modelos, repositorios)
│   │   │   ├── datasources/
│   │   │   ├── model/
│   │   │   └── repositories/
│   │   ├── infrastructure/ # Implementaciones técnicas
│   │   │   ├── data/
│   │   │   ├── datasources/
│   │   │   └── repositories/
│   │   └── ui/             # Capa de presentación
│   │       ├── components/ # Componentes específicos del módulo
│   │       ├── containers/ # Lógica de presentación compuesta
│   │       ├── pages/      # Páginas asociadas a rutas
│   │       └── store/      # Estado del módulo (Zustand)
│   └── shared/             # Código reutilizable en toda la app
└── main.tsx               # Punto de entrada principal
```

---

## Funcionalidades principales

- Registrar pacientes con sus datos y síntomas.
- Listar pacientes registrados.
- Buscar paciente por su ID.
- Validación de formularios con Zod y React Hook Form.
- Manejo de estado eficiente con Zustand.
- Enrutamiento modular con React Router DOM.
