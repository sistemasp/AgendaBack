import * as mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ClaveSupervisorSchema = new Schema({
    clave: { type: String },
    supervisor: { type: Schema.ObjectId, ref: 'Empleado' },
    isActive: { type: Boolean, default: false },
});