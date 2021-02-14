# AppComponetsIonic

## Na pagina src/pages está aonde foi incementando todos os componetes do Ionic

## Para pode iniciar a aplicação usar os comandos:

1. npm install
2. ionic serve
3. obs(necessário ter instalado Nodejs e Ionic para rodar)

## Tecnologinas e ferramentas usadas:

1. IDE : VSCODE
2. Angular
3. Ionic (Js,Ts,Nodejs,Html,Css)

# Componentes Utilizados 

## Inputs
Os inputs (Campo de entrada de dados) são essenciais para coletar e manipular a entrada de dados de forma segura. Eles devem ser apresentados de maneira intuitiva para os usuários interagirem. Cada campo de entrada em um formulário possui um controle, uma função que se liga ao valor no campo e executa a validação. Um grupo de campos é uma coleção de controles que manipulam o envio de formulários e fornecem uma ligação de alto nível que pode ser usada para determinar se o formulário inteiro é válido.


##  Action Sheets 

deslizam para cima a partir da borda inferior da tela do dispositivo
e exibem um conjunto de opções com a capacidade de confirmar ou cancelar uma ação. As folhas de ação às vezes podem ser usadas como uma alternativa aos menus, no entanto, elas não devem ser usadas para navegação

Um Action Sheets sempre aparece acima de qualquer outro componente na página e deve ser descartado para interagir com o conteúdo subjacente. Quando é acionado, o resto da página escurece para dar mais foco às opções da Folha

## Alerts
Alerts são uma ótima forma de oferecer ao usuário a capacidade de escolher uma ação específica. Podem ser utilizados para fornecer informações importantes ao usuário ou exigir que eles tomem uma decisão. Em uma perspectiva de interação com o usuário, os Alerts podem ser pensados como uma apresentação visual de um “quadro flutuante” que cobre apenas uma parte da tela. Isso significa que os Alerts só devem ser usados para ações rápidas como verificação de senha, notificações de pequenas aplicações ou opções rápidas.

## Lists
As lists são usadas para exibir linhas de informações, como lista de contatos, lista de reprodução ou menu de opções. As listas são os elementos mais populares de qualquer aplicação web ou móvel. Geralmente, são usadas para exibir várias informações separadas em linhas e podem ser combinadas com outros elementos HTML, como imagens, ícones etc., para criar diferentes apresentações. O framework Ionic oferece diferentes tipos de listas para facilitar seu uso

##  Checkbox
Um checkbox (caixa de seleção) é um componente de entrada que contém um valor booleano. As caixas de seleção são iguais aos componentes de caixa de seleção da linguagem HTML. No entanto, a plataforma Ionic oferece várias formas de configurações para caixas de seleção diferentes. Um atributo pode ser utilizado para definir o valor padrão do checkbox e o atributo poderá ser ativado ou desativado pela ação do usuário quando interage com o checkbox.

## Cards
Os cards (cartões) são uma ótima forma de exibir partes importantes de conteúdo. Eles são relativamente mais novos que os outros componentes, mas estão emergindo rapidamente como um padrão de design para aplicativos. Além disso, eles possibilitam conter e organizar informações para destacar de forma visual e melhorar as expectativas do usuário. Os cartões facilitam a exibição visual da mesma informação em vários tamanhos de tela diferentes quando utilizados em aplicativos móveis. Eles também permitem mais controle, são flexíveis e podem até ser animados. Os cartões, geralmente, são colocados uns sobre os outros, mas eles também podem ser usados como uma “página” e deslocados entre esquerda e direita na tela.

## Range
O range (alcance) é um componente que permite aos usuários selecionar diversos valores movendo um botão deslizante ao longo da barra ou faixa. Além disso, ele permite o uso de etiquetas de escala colocadas em ambos os lados do intervalo que adicionam propriedades de início e fim ao intervalo. Valores mínimo e máximo também podem ser passados para o intervalo por meio das propriedades min e max, respectivamente. Por padrão, o intervalo define o valor mínimo para 0 e o máximo para 100.

## Toast
Um toast (torrada) é uma notificação sutil comumente usada como mensagem de interação com o usuário. Pode ser usado para fornecer comentários sobre uma operação ou para exibir uma mensagem do sistema. A mensagem aparece sobre o conteúdo do aplicativo e pode ser fechada pelo aplicativo para retomar a interação do usuário com a tela. A mensagem a ser exibida deve ser passada na propriedade message. A opção showCloseButton pode ser definida como verdadeira para exibir um botão de fechamento no Toast

## Badge
O badge (distintivo) é um componente simples que apresenta números, texto ou ícones em um formato visual distintivo. São componentes pequenos que se destacam na tela do aplicativo e tipicamente comunicam um valor visual ao usuário. Um badge geralmente é usado para exibir uma combinação de imagem, textos e números associados a um item que está em destaque na tela.

## Toggle
O toggle (alternar) é um componente de entrada a ser utilizado com a função booleana de liga ou desliga. Como o componente de caixa de seleção, as ações de alternância entre valores são frequentemente usadas para permitir ao usuário ativar ou desativar uma configuração. Atributos com as propriedades de desabilitado ou verificado também podem ser aplicados ao toggle para controlar seu comportamento.

## Navigation
Navigation não é um componente propriamente dito, mas é a forma como os usuários se movem entre diferentes páginas em um aplicativo. A navegação na plataforma Ionic pode ser realizada de várias formas e com um conjunto de componentes. Para habilitar a navegação, a API Ionic fornece a classe NavController para ser instanciada e servir como componente base para controlar a navegação no aplicativo.

## NavController

tem a funcionalidade de controlador de navegação. Basicamente, um controlador de navegação é um vetor de páginas que representam um histórico de navegação em particular. Esse vetor pode ser manipulado para navegar em todo o aplicativo, pressionando e exibindo páginas ou inserindo e removendo-as no vetor do histórico. A página atual, ou seja, aquela que está sendo exibida no momento, é a última que está no topo do vetor. Podemos comparar o vetor a uma estrutura de dados do tipo pilha, a página a ser exibida é colocada no topo da pilha; para voltar à página anterior, basta remover a página atual que está no topo.


### obs :

1. Foi utilizada a diretiva ngModel para fazer a transferência de valores das variáveis
2. Para mostrar o conteúdo das variáveis na página foi usada a forma {{}}.
