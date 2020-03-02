import Sequelize, { Model } from 'Sequelize';

class Recipient extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                zip_code: Sequelize.STRING,
                street: Sequelize.STRING,
                number: Sequelize.STRING,
                complement: Sequelize.STRING,
                state: Sequelize.STRING,
                city: Sequelize.STRING,
            },

            {
                sequelize,
            }
        );

        return this;
    }
}

export default Recipient;
