var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function() {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '123456789',
            adress: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Ap 109',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method : 'Moto',
            driver_license: 'cnh-digital.jpg'
        }

        return data
    }
}