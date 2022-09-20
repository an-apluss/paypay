import axios from 'axios'
import { createServer } from 'miragejs'

import { fetchInvoices } from '../../utils/constant'

const invoices = [
    {
        product_name: 'Payment Project - Monlight Mobile Design',
        company_logo_url: 'https://res.cloudinary.com/an-apluss/image/upload/v1663532162/ourpass/dipa_inhouse_logo.png',
        company_name: 'Dipa Inhouse',
        company_address: 'Ijen Boulevard Street 101',
        company_state: 'East Java',
        company_city: 'Malong City',
        company_email: 'hello@dipainhouse.com',
        company_country: 'Indonesia',
        company_postal_code: '65116',
        invoice_id: 'INV-2022-010',
        billed_to_name: 'Zaky Grizzly',
        billed_to_state: 'New York',
        billed_to_company: 'Monlight Agency LTD',
        billed_to_country: 'USA',
        issued_date: '11 Jan 22',
        due_date: '18 Jan 22',
        hours: '120',
        rate: '40.00',
        tax: '0.00',
        line_total: '4800',
        description: '',
        payment_method: 'Wire Transfer',
        selected_payment_logo_url: 'https://res.cloudinary.com/an-apluss/image/upload/v1663532291/ourpass/wise_logo.svg',
        account_number: '9700002342002900',
        account_name: 'Barly Vallendito',
        routing_number: '084009519',
        discount: '0.00',
        total_tax: '0.00',
    },
    {
        product_name: 'Payment Project - Company Mobile Design',
        company_logo_url: 'https://res.cloudinary.com/an-apluss/image/upload/v1663532162/ourpass/dipa_inhouse_logo.png',
        company_name: 'Dipa Inhouse',
        company_address: 'Ijen Boulevard Street 101',
        company_state: 'East Java',
        company_city: 'Malong City',
        company_email: 'hello@dipainhouse.com',
        company_country: 'Indonesia',
        company_postal_code: '65116',
        invoice_id: 'INV-2022-110',
        billed_to_name: 'Zaky Grizzly',
        billed_to_state: 'New York',
        billed_to_company: 'Company Agency LTD',
        billed_to_country: 'USA',
        issued_date: '11 Jun 22',
        due_date: '18 Jun 22',
        hours: '100',
        rate: '50.00',
        tax: '0.00',
        line_total: '5000',
        description: '',
        payment_method: 'Wire Transfer',
        selected_payment_logo_url: 'https://res.cloudinary.com/an-apluss/image/upload/v1663532291/ourpass/wise_logo.svg',
        account_number: '9700002342002999',
        account_name: 'Marvin Rolex',
        routing_number: '084009917',
        discount: '0.00',
        total_tax: '0.00',
    }
];

createServer({
    routes() {
        this.get(`${fetchInvoices}`, () => {
            return invoices;
        })

        this.get(`${fetchInvoices}/:id`, (schema, request) => {
            return invoices.find(invoice => invoice.invoice_id == request.params.id);
        })
    }
})

export function fetchAllInvoices ({commit}) {
    

    return new Promise((resolve, reject) => {

        axios.get(`${fetchInvoices}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

export function fetchOneInvoiceByID({commit}, payload) {
    return new Promise((resolve, reject) => {

        axios.get(`${fetchInvoices}/${payload}`)
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
