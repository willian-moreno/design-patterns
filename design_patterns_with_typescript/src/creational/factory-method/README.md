# Factory Method

## Premissa

- Definir uma interface para criar um objeto, mas deixar as subclasses decidirem que classe instanciar. O Factory Method permite adiar a instancia��o para as subclasses.
- Factory (F�bricas) s�o simplesmente opera��es (fun��es ou m�todos) que criam objetos.

## Factory em geral

```javascript
type Car = { model: string, motor: string };
type CarPrototype = { showDetails(): void };

const carPrototype: CarPrototype = {
  showDetails(): void {
    console.log(this);
  },
};

const carFactory = (model: string, motor: string): Car & CarPrototype => {
  const idAsPrivateMember = Math.floor(Math.random() * 1000);
  const carObj = Object.create(carPrototype);
  return Object.assign(carObj, { id: idAsPrivateMember, model, motor });
};

const car1 = carFactory('Porsche', 'V8');
car1.showDetails(); // { id: 210, model: 'Porsche', motor: 'V8' }
const car2 = carFactory('Dodge', 'V8');
car2.showDetails(); // { id: 321, model: 'Dodge', motor: 'V8' }
```

## Sobre o Factory Method

- � um padr�o de projeto de cria��o (lida com a cria��o de objetos).
- Oculta a l�gica de instancia��o do c�digo cliente. O m�todo f�brica ser� respons�vel por instanciar as classes desejadas.
- � obtido atrav�s de heran�a. O m�todo f�brica pode ser criado ou sobrescrito por subclasses.
- Da flexibilidade ao c�digo cliente permitindo a cria��o de novas factories sem a necessidade de alterar c�digo j� escrito (OCP).
- Pode usar par�metros para determinar o tipo dos objetos a serem criados ou os par�metros a serem enviados aos objetos sendo criados.

> C�digo cliente: C�digo que tende a repetir muito dentro da aplica��o.

## Estrutura

![structure](./assets/imgs/structure.png)

## Implementa��o

```javascript
interface Product {
  sayHi(): void;
}

class ConcreteProduct implements Product {
  sayHi(): void {
    console.log('Hi');
  }
}

abstract class Creator {
  abstract factoryMethod(): Product;

  createAndShow(): void {
    const product = this.factoryMethod();
    console.log(product);
  }
}

class ConcreteCreator extends Creator {
  factoryMethod(): Product {
    return new ConcreteProduct();
  }
}

const creator = new ConcreteCreator();
const product = creator.factoryMethod();
product.sayHi(); // Hi
creator.createAndShow(); // ConcreteProduct {}
```

## Aplicabilidade

### Use o factory method:

- Quando n�o souber com certeza quais os tipos de objetos o c�digo vai precisar.
- Para permitir a extens�o de suas factories para cria��o de novos objetos (isso ajuda a aplicar o Open/Closed Principle).
- Para desacoplar o c�digo que cria do c�digo que usa as classes (Single Responsibility Principle).
- Para dar um hook (gancho) �s subclasses para permitir que elas decidam a l�gica de cria��o de objetos.
- Para eliminar duplica��o de c�digo na cria��o de objetos.

## Consequ�ncias

### Bom

- Ajuda na aplica��o do Open/Closed Principle. O c�digo vai estar aberto para extens�o.
- Ajuda na aplica��o do Single Responsibility Principle. Separa o c�digo que cria do c�digo que usa o objeto.
- Ajuda no desacoplamento do c�digo.

### Ruim

- Se usado sem necessidade, pode causar uma explos�o de subclasses. Ser� necess�rio uma classe ConcreteCreator para cada ConcreteProduct.

---

### Refer�ncias

[Factory Method Teoria - Padr�es de Projeto](https://youtu.be/1rB0PhvAwiU?list=PLbIBj8vQhvm0VY5YrMrafWaQY2EnJ3j8H)
