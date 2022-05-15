// Função em JS é First-Class Object (Citizens)
// Higher-order function

// Criar de forma literal
function fun1() {}

// Armazenar em uma variavel
const fun2 = function() {}

// Armazenar em um array
const array = [function (a, b) {return a + b}, fun1, fun2]

// Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() { return 'Opa'}
console.log(obj.falar())

// Passar função como param
function run (fun){
    fun()
}
run(function() {console.log('Executando...')})

// Uma função pode retornar/conter uma outra função
function soma(a, b) {
    return function (c) {
        console.log(a + b +c)
    }
}

soma (2, 3)(4)

//outra forma de chamar
const cincoMais = (2, 3)
cincoMais(4)