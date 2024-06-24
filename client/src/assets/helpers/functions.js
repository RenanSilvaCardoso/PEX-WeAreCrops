import axios from "axios";

const formatPhoneNumber = (value) => {
    if (!value) return value;

    const phoneNumber = value.replace(/[^\d]/g, '');
    const phoneNumberLength = phoneNumber.length;

    if (phoneNumberLength <= 2) return phoneNumber;
    if (phoneNumberLength <= 6) {
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    if (phoneNumberLength <= 10) {
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 6)}-${phoneNumber.slice(6)}`;
    }
    if (phoneNumberLength <= 11) {
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7)}`;
    }

    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2, 7)}-${phoneNumber.slice(7, 11)}`;
};

const isFormValid = (formValues) => {
    return Object.values(formValues).every(value => value.trim() !== '');
};

const api = axios.create({
    baseURL: "http://localhost:5000/",
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

const fetchInstagramPosts = async () => {
    try {
        const response = await api.get("api/instagram");

        // console.log(response.data);

        return response;
    } catch (error) {
        // Trate erros aqui
        console.error('Erro ao buscar dados:', error);
        throw error;
    }
}

export {
    formatPhoneNumber,
    isFormValid,
    fetchInstagramPosts
}
