import React from 'react';

function Contact() {
    function teste(){
        alert('oi');
    }

    return (
        <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Fale com a gente</h2>
            <form onSubmit={teste} class="space-y-8">
                <div class="space-y-2">
                    <p class="text-xs">*Campos Obrigatórios</p>
                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*Nome</label>
                    <input type="text" id="name" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2.5" placeholder="Nome" required />
                    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*Sobrenome</label>
                    <input type="text" id="lastname" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2.5" placeholder="Sobrenome" required />
                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*Telefone</label>
                    <input type="text" id="phone" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2.5" placeholder="(99) 99999-9999" pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" required />
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*E-mail</label>
                    <input type="email" id="email" class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2.5" placeholder="name@crops.com" required />
                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*Assunto</label>
                    <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-md focus:ring-primary" placeholder="Conte como podemos te ajudar" required />
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">*Sua mensagem</label>
                    <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-md border border-gray-300 focus:ring-primary" placeholder="Escreva um comentário" required></textarea>
                </div>
                <div class="px-4 mx-auto max-w-screen-md text-center">
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300">Enviar mensagem</button>
                </div>
            </form>
        </div>
    );
}

export default Contact;
