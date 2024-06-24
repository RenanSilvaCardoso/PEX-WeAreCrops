import {useState} from "react";
import emailjs from '@emailjs/browser';
import { formatPhoneNumber, isFormValid } from "../../assets/helpers/functions.js";
import useGlobalState from "../../store.js";

export default function Form() {
    const { toggleShow, setText, setStatus } = useGlobalState();
    const [formValues, setFormValues] = useState({
        name: "",
        lastname: "",
        phone: "",
        email: "",
        subject: "Reserva",
        message: ""
    });

    const handleChange = (event) => {
        const {id, value} = event.target;
        setFormValues(prevState => ({
            ...prevState,
            [id]: id === 'phone' ? formatPhoneNumber(value) : value
        }));
    };

    const templateParams = {
        from_name: formValues.name,
        lastname: formValues.lastname,
        phone: formValues.phone,
        email: formValues.email,
        subject: formValues.subject,
        message: formValues.message
    }

    function sendEmail(e) {
        e.preventDefault();

        if (isFormValid(formValues)) {
            emailjs.send('service_atfnc7l', 'template_cfd4myo', templateParams, 'Aid8TpzWgL5JmqlHL')
                .then(() => {
                    setText("Sucesso! Contato enviado.");
                    setStatus("success");
                    toggleShow();
                    setFormValues({
                        name: "",
                        lastname: "",
                        phone: "",
                        email: "",
                        subject: "",
                        message: ""
                    })
                }, (err) => {
                    console.log('ERRO ', err)
                })
        } else {
            alert('Preencha todos os campos.');
            return;
        }
    }

    return (
        <form className="space-y-4 w-full" onSubmit={sendEmail}>
            <div className="space-y-1">
                <p className="text-xs">*Campos Obrigatórios</p>

                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    *Nome
                </label>
                <input
                    type="text"
                    id="name"
                    className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2"
                    value={formValues.name}
                    onChange={handleChange}
                    required
                    placeholder="Nome"
                />


                <label htmlFor="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    *Sobrenome
                </label>
                <input
                    type="text"
                    id="lastname"
                    className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2"
                    value={formValues.lastname}
                    onChange={handleChange}
                    required
                    placeholder="Sobrenome"
                />

                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    *Telefone
                </label>
                <input
                    type="phone"
                    id="phone"
                    className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2"
                    value={formValues.phone}
                    onChange={handleChange}
                    required
                    placeholder="(99) 99999-9999"
                />

                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    *E-mail
                </label>
                <input
                    type="email"
                    id="email"
                    className="shadow-md bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary block w-full p-2"
                    value={formValues.email}
                    onChange={handleChange}
                    required
                    placeholder="nome@mail.com"
                />

                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                    *Assunto
                </label>
                <select
                    id="subject"
                    className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-md focus:ring-primary"
                    value={formValues.subject}
                    onChange={handleChange}
                    required
                    placeholder="Assunto"
                >
                    <option value="Reserva">Reserva</option>
                    <option value="Sugestão">Sugestão</option>
                    <option value="Crítica">Crítica</option>
                    <option value="Trabalhe conosco">Trabalhe conosco</option>
                </select>
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">
                    *Sua mensagem
                </label>
                <textarea
                    id="message"
                    rows="6"
                    className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-md border border-gray-300 focus:ring-primary"
                    value={formValues.message}
                    onChange={handleChange}
                    required
                    placeholder="Escreva sua mensagem aqui."
                />
            </div>
            <div className="px-4 mx-auto max-w-screen-md text-center">
                <button type="submit"
                        className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary sm:w-fit hover:bg-primary-800 focus:outline-none"
                >
                    Enviar mensagem
                </button>
            </div>
        </form>
    )
}
