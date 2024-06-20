import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Form(){
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const templateParams = {
        from_name: name,
        lastname: lastname,
        phone: phone,
        email: email,
        subject: subject,
        message: message
    }

    function sendEmail(e){
        e.preventDefault();

        if(name === "" || lastname === "" || phone === "" || email === "" || subject === "" || message === ""){
            alert('Preencha todos os campos.');
            return;
        }

        emailjs.send('service_atfnc7l', 'template_cfd4myo', templateParams, 'Aid8TpzWgL5JmqlHL')
        .then((res) => {
            console.log('E-mail enviado!', res.status, res.text)
            setName(""),
            setLastname(""),
            setPhone(""),
            setEmail(""),
            setSubject(""),
            setMessage("")
        }, (err) => {
            console.log('ERRO ', err)
        })
    }

    return(
        <form class="space-y-8" onSubmit={sendEmail}>
                <div class="space-y-2">
                    <p class="text-xs">*Campos Obrigatórios</p>

                    <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*Nome</label>
                    <input 
                        type="text" 
                        id="name" 
                        class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2.5" 
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required 
                        placeholder="Nome"/>


                    <label for="lastname" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*Sobrenome</label>
                    <input 
                        type="text" 
                        id="lastname" 
                        class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2.5" 
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                        required 
                        placeholder="Sobrenome"/>

                    <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*Telefone</label>
                    <input 
                        type="text" 
                        id="phone" 
                        class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2.5" 
                        value={phone}
                        onChange={(e) => setPhone( e.target.value)}
                        pattern="(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})" 
                        required 
                        placeholder="(99) 99999-9999"/>

                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*E-mail</label>
                    <input 
                        type="email" 
                        id="email" 
                        class="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2.5" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                        placeholder="crops@co.com"/>

                    <label for="subject" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">*Assunto</label>
                    <input 
                        type="text" 
                        id="subject" 
                        class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-md focus:ring-primary" 
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        required 
                        placeholder="Assunto"/>
                </div>
                <div class="sm:col-span-2">
                    <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">*Sua mensagem</label>
                    <textarea 
                        id="message" 
                        rows="6" 
                        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-md border border-gray-300 focus:ring-primary" 
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required 
                        placeholder="Escreva sua mensagem aqui."></textarea>
                </div>
                <div class="px-4 mx-auto max-w-screen-md text-center">
                    <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:outline-none">Enviar mensagem</button>
                </div>
            </form>
    )
}