	Esse projeto é uma implementação do Context API do React, antes de irmos para a instalação do projeto precisamos entender o que é Context API e qual problema ele resolve.

**Explicação**

​	Para você entender melhor vamos partir de um exemplo real que você já passou ou vai passar algum dia, imagine que você é gerente de um departamento e precisa informa os colaboradores desse departamento que no próximo dia 5 vocês terão uma reunião muito importante. Se houver 5 pessoas nesse departamento será uma tarefa teoricamente fácil, não? Você envia para cada um uma mensagem com a informação e seu problema está resolvido.

​	Mas e se houver 50 , 100 funcionários, a tarefa complica um pouco pois você ira perder um tempo muito grande enviando mensagem para cada um deles, para solucionar o problema ao invés de você enviar uma mensagem para cada um deles você cria um grupo, adiciona cada um deles e envia uma mensagem no grupo e todos irão receber.

​	Ok, mas o que tudo isso tem a haver com context API do React?, bom vamos trazer o exemplo acima para o mundo da programação, no lugar do gerente vamos colocar um estado com as informações de login do usuário e para os colaboradores vamos os considerar como componentes React que necessitam dessa informação, como por exemplo Header, footer, aside, section e por ai vai. Novamente, se tivermos 3, 5 componentes será fácil, basta apenas passar as informações via parâmetro do componente.

​	Mas se houver 50, 100 componentes ficara muito complexo e verboso para manter , por conta disso criamos um context(contexto, ambiente) onde os componentes que estiver inserido terá acesso as informação, necessitando apenas fazer um solicitação.

**Instalação**

Primeiramente devemos clonar o repositório.

![](/media/ismael/HD/GitHub/Projects/Implementing React Context Api/assets/print-GitClone.png)

Agora vamos executar os seguintes comandos.

![](/media/ismael/HD/GitHub/Projects/Implementing React Context Api/assets/Print - Terminal .png)



Em caso de duvidas, sugestões ou xingamento me mande uma mensagem por e-mail (ismaelalves1@outlook.com.br) , terei o prazer te responder ou mandar você para a "casa do cacete" :D