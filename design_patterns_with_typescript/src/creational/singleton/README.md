# Singleton

## Premissa

- Uma classe deve conter somente uma inst�ncia e fornecer, de forma global, um ponto de acesso aos seus atributos e m�todos.
- Geralmente utilizado para acesso a recursos compartilhados, como acesso � base de dados, interfaces gr�ficas, sistema de arquivos, arquivos de configura��o, servidores de impress�o, logger, etc.
- Tamb�m utilizado para substituir vari�veis globais, como em casos de uso de objetos de configura��o do sistema como um todo.
- Pode-se permitir acesso global ao Singleton em toda sua aplica��o, assim como faz�amos (ou fazemos) com vari�veis globais.
- A inst�ncia pode ser protegida com encapsulamento, evitando que outro c�digo sobrescreva o seu valor.

## Estrutura

![structure](./assets/img/structure.png)

## Implementa��o

```javascript
export class Singleton {
	private static _instance: Singleton | null = null;

	private constructor() {
		// construtor n�o pode ser acessado com new.
	}

	static get instance(): Singleton {
		if(Singleton._instance === null)
			Singleton._instance = new Singleton();

		return Singleton._instance;
	}

	const instance1 = new Singleton.instance;
	const instance2 = new Singleton.instance;

	console.log(instance1 === instance2); //true
}
```

## Aplicabilidade

- Usar o Singleton quando uma classe precisa ter somente uma inst�ncia dispon�vel em todo a aplica��o.
- Usar o Singleton quando perceber que est� usando vari�veis globais para manter partes importantes do programa, como vari�veis de configura��o que s�o usadas por toda a aplica��o.

## Consequ�ncias

### Bom

- Acesso controlado � inst�ncia �nica.
- � f�cil permitir um n�mero maior de inst�ncias caso mude de ideia.
- Usa _lazy instantiation_, o Singleton s� � criado no momento do uso.
- Substitui vari�veis globais.

### Ruim

- � mais dif�cil de testar.
- Viola o princ�pio da responsabilidade �nica
- Requer tratamento especial em casos de concorr�ncia.
- Erich Gamma (autor) descreveu que este seria o �nico padr�o que ele removeria se fosse refatorar o livro ?Design Patterns: Elements of Reusable Object-Oriented Software?.

---

### Refer�ncias

[Singleton Teoria - Padr�es de Projeto](https://youtu.be/x9h8MgAvi_I?list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H)
