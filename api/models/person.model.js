module.exports = (sequelize, Sequelize) => {
    const Person = sequelize.define("person", {
        person_id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        person_rut: {
            type: Sequelize.STRING,
            allowNull: false
        },
        person_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        person_lastname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        person_age: {
            type: Sequelize.INTEGER,
            allowNull: true
        },
        person_address: {
            type: Sequelize.STRING
        },
    }, {
        tableName: 'person',
        timestamps: false,
        freezeTableName: true
    });

    return Person;
};