Preparación entorno:

1.- Clonar la plantilla only-typescript

	- https://github.com/softwarecrafters-io/only-typescript.git

2.- Instalar dependicias npm

	- npm install

2.- Instalar jest

	- npm i -D jest ts-jest @types/jest

3.- Configurar jest

	- npx ts-jest config:init

4.- Añadir configuración de Jest (cobertura de tests)
    [...]
	verbose: true,
    collectCoverage: true,
    coverageDirectory: "./coverage",
    coverageThreshold: {
        global:{
          statements: 50,
        branches: 50,
        functions: 50,
        lines: 50
        }
    } 

5.- Añadir configuración al fichero de npm para lanzar jest

    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",