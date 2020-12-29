import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ClaveSupervisorSchema = new Schema({
    clave: { type: String },
    supervisor: { type: Schema.ObjectId, ref: 'Empleado' },
    is_active: { type: Boolean, default: false },
});