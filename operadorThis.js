
/*O operador this no JavaScript serve para referenciar o objeto atual em que um código está sendo executado,
 permitindo o acesso aos membros desse objeto e tornando o código mais flexível e reutilizável.*/

/*OBS: O operador this é mais comumente usado em JavaScript quando se trabalha com classes. 
Em uma classe, o this é usado para se referir à instância atual da classe e acessar suas propriedades e métodos.
No entanto, o operador this também pode ser usado em outros contextos, fora de classes. 

Por exemplo, em uma função regular (não uma função de seta), o this pode ser usado para se referir ao objeto
no qual a função está sendo chamada.

No entanto, é importante observar que o comportamento do this pode variar dependendo do contexto em que é usado.
Em funções de seta, o this é determinado lexicalmente, o que significa que ele é vinculado ao valor do this no escopo pai mais próximo.
Isso evita alguns problemas comuns de escopo do this em funções regulares.

Dentro do contexto do React, em componentes de função, o uso do operador this não é comum. 
Em vez disso, os hooks são usados para gerenciar o estado e os efeitos colaterais. 

Portanto, em componentes de função do React, é recomendado evitar o uso do this e utilizar diretamente as variáveis de estado 
e as funções fornecidas pelos hooks para acessar e atualizar o estado do componente.*/

/*ENTÃO, O OPERADOR THIS FUNCIONA MELHOR EM JS PURO, EM REACT SE UTILIZA OS HOOKS.*/

function aluno(nome, nota){
    this.nome=nome,                     /* O this faz referencia a um elemento da minha função */
    this.nota=nota


    this.dados_anonimo=function(){
        setTimeout(function(){
            // this.nome="x"            /* Com função anonima  o this não funciona com o contexto do pai, */
            // this.nota=5              /* voce tem que criar um contexto para a propria função*, para contornar isso, */
            console.log(this.nome)      /* você pode usar a arrow function como abaixo */
            console.log(this.nota)
        },2000)
    }
    
    
    this.dados_arrow=function(){
        setTimeout(()=>{                /* O Arrow function contorna a questão do This gerado na nova extansia gerado pelo setTimeout*/
                                        /* Por que o arrow function não usa o contexto léxico ou o contexto da execução atual, então ele*/
            console.log(this.nome)      /* não vai usar oque foi gerado pelo setTimeout, ele vai usar o contexto do Pai/do Root na onde */
            console.log(this.nota)      /* ele está sendo executado, que no caso é a função aluno, esse é o detalhe chave que faz com que*/
        },2000)                         /* a arrow function funcione e a função anonima tradicional não funcione neste caso.*/
    }

    

}

const pessoa = {
    nome: "Bruno",
    saudacao: function() {
      console.log("Olá, eu sou " + this.nome + "!");
    }
  };
  
pessoa.saudacao(); // Saída: Olá, eu sou João!




const al1=new aluno("Bruno",100)
al1.dados_anonimo()

al1.dados_arrow()
