// Captura os elementos do HTML usando seus IDs
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adiciona conteúdo aos elementos usando .innerText e .innerHTML
titulo.innerText = 'Título da Página';
link.innerText = 'Visite Proz Educação';

// Adiciona itens simples na lista não ordenada usando .innerHTML
listaNaoOrdenada.innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

// Adiciona itens com links na lista ordenada usando .innerHTML
listaOrdenada.innerHTML = '<li><a href="https://site1.com">Site 1</a></li><li><a href="https://site2.com">Site 2</a></li><li><a href="https://site3.com">Site 3</a></li>';
