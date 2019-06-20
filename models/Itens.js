export default (sequelize, DataType)=>{
    const Item = sequelize.define('Item',{
        id: {
            type: DataType.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        },
        unitWeight: {
            type: DataType.STRING,
            allowNull: false,
            validate:{
                notEmpty: true
            }
        }
    });
    return Item;
}