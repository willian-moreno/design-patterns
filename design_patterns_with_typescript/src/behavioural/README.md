# Padr�es de projeto comportamentais (behavioural)

Os padr�es de projeto comportamentais se preocupam com os algoritmos e a atribui��o de responsabilidades entre objetos. Os padr�es comportamentais n�o descrevem apenas padr�es de objetos ou classes, mas tamb�m os padr�es de comunica��o entre eles. Esses padr�es caracterizam fluxos de controle dif�ceis de seguir em tempo de execu��o. Eles afastam o foco do fluxo de controle para permitir que voc� se concentre somente na maneira como os objetos s�o interconectados.

## Padr�es e inten��es

Os padr�es de projeto comportamentais originais da GoF s�o:

- **Chain of responsibility** - evita o acoplamento do remetente de uma solicita��o ao seu destinat�rio, dando a mais de um objeto a chance de tratar a solicita��o. Encadeia os objetos receptores e passa a solicita��o ao longo da cadeia at� que um objeto a trate.
- **Command** - encapsula uma solicita��o como um objeto, desta forma permitindo que voc� parametrize clientes com diferentes solicita��es, enfileire ou registre (log) solicita��es e suporte opera��es que podem ser desfeitas.
- **Interpreter** - dada uma linguagem, define um representa��o para sua gram�tica juntamente com um interpretador que usa a representa��o para interpretar senten�as nesta linguagem.
- **Iterator** - fornece uma maneira de acessar sequencialmente os elementos de um objeto agregado sem expor sua representa��o subjacente.
- **Mediator** - define um objeto que encapsula como um conjunto de objetos interage. O mediator promove o acoplamento fraco ao evitar que os objetos se refiram explicitamente uns aos outros, permitindo que voc� varie suas intera��es independentemente.
- **Memento** - sem violar a encapsula��o, captura e externaliza um estado interno de um objeto, de modo que o mesmo possa posteriormente ser restaurado para este estado.
- **Observer** - define uma depend�ncia um para muitos entre objetos, de modo que, quando um objeto muda de estado, todos os seus dependentes s�o automaticamente notificados e atualizados.
- **State** - permite que um objeto altere seu comportamento quando seu estado interno muda. O objeto parecer� ter mudado sua classe.
- **Strategy** - Define uma fam�lia de algoritmos, encapsular cada um deles e faz�-los intercambi�veis. O strategy permite que o algoritmo varie independentemente dos clientes que o utilizam.
- **Template method** - define o esqueleto de um algoritmo em uma opera��o, postergando a defini��o de alguns passos para subclasses. O template method permite que as subclasses redefinam certos passos de um algoritmo sem mudar sua estrutura.
- **Visitor** - representa uma opera��o a ser executada sobre os elementos da estrutura de um objeto. O visitor permite que voc� defina uma nova opera��o sem mudar as classes dos elementos sobre os quais opera.
