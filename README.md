# Getting Started

First, run the development server:

```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


# Reto Técnico - Registro de síntomas

Este es un proyecto de Next.js diseñado para que un paciente pueda registrar sus síntomas básicos como dolor de cabeza, fiebre, tos etc.


# Versiones

- `Next.js 15.4.6`
- `Node.js 22.17.0`


# Dependencias de desarrollo

- `npm install`


# Arquitectura implementada

Para este reto se implementó una arquitectura modular, organizando el proyecto en capas separadas para mantener un orden claro y facilitar la mantenibilidad. De esta forma, las views, components, styles y utils se encuentran estructurados en sus respectivos módulos, permitiendo una mejor escalabilidad y reutilización del código.


# Estructura del proyecto
```tree 
|-- src/
|   |-- app/
|   |   |-- layout.tsx
|   |   |-- page.tsx
|   |
|   |-- components/
|   |   |-- Button.tsx
|   |   |-- Checkbox.tsx
|   |   |-- Header.tsx
|   |   |-- Input.tsx
|   |   |-- Modal.tsx
|   |   |-- Textarea.tsx
|   |
|   |-- styles/
|   |   |-- globals.css
|   |
|   |-- utils/
|   |    |-- validationsForm.ts
|   |    |-- types.ts
```

