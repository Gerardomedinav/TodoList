# Trabajo Integrador Final - Desarrollador Web con React JS

## Descripción

Este proyecto es el resultado del Trabajo Integrador Final desarrollado en el marco del programa de colaboración con la Universidad Tecnológica Nacional (UTN) y  Argentina Programa. Se trata de una aplicación web construida con React JS que permite gestionar una lista de tareas.

## Captura de Pantalla

![Captura de Pantalla](miapp/public/Img/pantalla.png)

## Requerimientos

### Componentes Funcionales

#### 1. Componente de Lista de Tareas (TaskList):

Este componente muestra la lista de tareas. Recibe como propiedades la lista de tareas y funciones para gestionar eventos relacionados con las tareas, como marcar como completada, eliminar, etc. Cada tarea se representa mediante un componente TaskItem.

#### 2. Componente de Tarea (TaskItem):

Representa individualmente una tarea, mostrando el nombre de la tarea y un botón para completarla. Utiliza el estado local para gestionar la apariencia de la tarea, por ejemplo, tachado cuando está completada.

#### 3. Componente de Formulario (TaskForm):

Contiene un formulario para agregar nuevas tareas. Utiliza el estado local para gestionar la entrada del usuario y envía la nueva tarea a la lista principal.

### Estado con useState

#### 1. Estado Principal (tasks):

Utiliza el hook useState en el componente principal para gestionar el estado de la lista de tareas. Cada tarea es un objeto con propiedades como id, nombre, y completada.

### Efectos con useEffect

#### 1. Efecto de Actualización (useEffect en el componente principal):

Utiliza useEffect para realizar una acción (por ejemplo, mostrar un mensaje) cuando el estado de la lista de tareas cambia.

### Interacción con el Usuario - Eventos

#### 1. Eventos en Componente de Lista (TaskList):

Implementa eventos que permiten al usuario interactuar con cada tarea, como marcar como completada, eliminar, etc. Estos eventos modifican el estado principal (tasks).

#### 2. Eventos en Componente de Formulario (TaskForm):

Implementa eventos para gestionar la entrada del usuario y agregar nuevas tareas a la lista.

### Estilo y Diseño

Aplica estilos CSS para mejorar la apariencia de los componentes. Se puede utilizar bibliotecas como styled-components si se desea.

### Puntos Extra (Opcionales)

Implementa la persistencia de datos utilizando localStorage para que las tareas persistan incluso después de recargar la página.

## Tecnologías Utilizadas

- React
- Chakra UI
- Formik

## Colaboración

La colaboración en el desarrollo se llevó a cabo mediante reuniones virtuales utilizando Zoom para facilitar la comunicación en tiempo real entre los miembros del equipo. Además, se utilizó un sistema de control de versiones basado en Git para gestionar y coordinar eficientemente el trabajo de desarrollo. Este enfoque permitió a los desarrolladores colaborar de manera efectiva, mantener un historial completo de cambios en el código y facilitar la integración de nuevas características al proyecto de manera coordinada.

## Cómo Clonar el Repositorio

Para obtener una copia de este proyecto y empezar a trabajar, sigue estos pasos:

1. Abre tu terminal.

2. Utiliza el siguiente comando para clonar el repositorio en tu máquina local:

   
   git clone https://github.com/Gerardomedinav/TodoList.git

  Cambia al directorio del proyecto:

  `cd TodoList`

  Instala las dependencias:

  `npm install`

  Inicia la aplicación:


  `npm start`

Esto debería iniciar la aplicación en tu navegador local.

